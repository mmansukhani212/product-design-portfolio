import {cp, mkdir, readFile, readdir, rm, writeFile} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {checkSite} from './check-site.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const input = process.env.PAGES_BASE_PATH || '';
const base = input === '/' ? '' : input.replace(/\/$/, '');
if (base && (!/^\/[a-zA-Z0-9._/-]+$/.test(base) || base.split('/').some(part => part === '.' || part === '..'))) {
  throw new Error('PAGES_BASE_PATH must be an absolute URL path without traversal.');
}

execFileSync(process.execPath, [path.join(root, 'scripts/render.mjs')], {cwd: root, stdio: 'inherit'});
const output = path.join(root, '_site');
await rm(output, {recursive: true, force: true});
await mkdir(output, {recursive: true});
await cp(path.join(root, 'dist'), output, {recursive: true});

async function adapt(directory) {
  for (const entry of await readdir(directory, {withFileTypes: true})) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) {await adapt(file); continue;}
    if (!/\.(html|css)$/.test(entry.name)) continue;
    let contents = await readFile(file, 'utf8');
    if (base) {
      if (entry.name.endsWith('.html')) contents = contents.replace(/\b(href|src)=(['"])\/(?!\/)/g, `$1=$2${base}/`);
      else contents = contents.replace(/url\((['"]?)\/(?!\/)/g, `url($1${base}/`);
    }
    await writeFile(file, contents);
  }
}
await adapt(output);
await writeFile(path.join(output, '.nojekyll'), '');
await writeFile(path.join(output, '404.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found | Monisha Mansukhani</title><link rel="stylesheet" href="${base}/styles.css"></head><body><main class="route-shell"><h1>Page not found.</h1><p>That page may have moved.</p><a class="button" href="${base}/">Back to Home ↗</a></main></body></html>`);
await checkSite(output, base);
console.log(`GitHub Pages output: _site/ (base path: ${base || '/'})`);
