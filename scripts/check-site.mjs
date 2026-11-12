import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';

export async function checkSite(root, base = '') {
  const files = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, {withFileTypes:true})) {
      const file = path.join(directory, entry.name);
      if (entry.isDirectory()) await walk(file);
      else files.push(file);
    }
  }
  await walk(root);
  let checked = 0;
  async function resolveLocal(reference, current) {
    if (/^(https?:|mailto:|tel:|data:|\/\/)/i.test(reference)) return;
    const [pathname, hash] = reference.split('#');
    const clean = decodeURIComponent(pathname.split('?')[0]);
    let destination = current;
    if (clean.startsWith('/')) {
      if (base && clean !== base && !clean.startsWith(base + '/')) throw Error(`URL escapes Pages base: ${reference}`);
      destination = path.join(root, clean.slice(base.length));
    } else if (clean) destination = path.resolve(path.dirname(current), clean);
    if (!destination.startsWith(path.resolve(root) + path.sep) && destination !== path.resolve(root)) throw Error(`URL escapes output: ${reference}`);
    const info = await stat(destination).catch(() => null);
    if (!info) throw Error(`Missing local target: ${reference} in ${current}`);
    if (info.isDirectory()) destination = path.join(destination, 'index.html');
    await stat(destination);
    if (hash && destination.endsWith('.html')) {
      const html = await readFile(destination, 'utf8');
      if (!html.includes(`id="${hash}"`)) throw Error(`Missing anchor: ${reference}`);
    }
    checked++;
  }
  for (const file of files) {
    if (file.endsWith('.html')) {
      const html = await readFile(file, 'utf8');
      if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) throw Error(`Expected one h1: ${file}`);
      if (/<iframe(?:\s|>)/.test(html)) throw Error(`Unexpected eager iframe: ${file}`);
      if (/Internal notes|mmansukh@iu\.edu/.test(html)) throw Error(`Internal or obsolete content: ${file}`);
      for (const match of html.matchAll(/\b(?:href|src|poster)=["']([^"']+)["']/g)) await resolveLocal(match[1], file);
    } else if (file.endsWith('.css')) {
      const css = await readFile(file, 'utf8');
      for (const match of css.matchAll(/url\(["']?([^"')]+)["']?\)/g)) await resolveLocal(match[1], file);
    }
  }
  for (const route of ['', 'about', 'work/rokt-competitive-intelligence', 'work/block-party', 'work/iheartmedia']) {
    await stat(path.join(root, route, 'index.html'));
  }
  console.log(`Validated five routes and ${checked} local links/assets/anchors.`);
}
