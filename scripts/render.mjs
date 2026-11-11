import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import {pageTools, imageViewer} from './page-tools.mjs';
import renderRokt from './pages/rokt.mjs';
import renderBlockParty from './pages/block-party.mjs';
import renderIheartmedia from './pages/iheartmedia.mjs';
import renderAbout from './pages/about.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const site = JSON.parse(await readFile(path.join(root, 'data/site.json'), 'utf8'));
const e = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<span aria-hidden="true" class="arrow">↗</span>';
const resume = (className = '') => `<a class="${className}" href="${e(site.resume)}" target="_blank" rel="noopener">Resume ${arrow}<span class="sr-only"> (PDF, opens in a new tab)</span></a>`;
const header = current => `<a class="skip-link" href="#main">Skip to content</a>
<header class="site-header"><div class="header-inner">
  <a class="wordmark" href="/" aria-label="${e(site.name)}, home"><span class="brand-mark" aria-hidden="true"><i></i></span><span>Monisha<br class="mobile-break"> Mansukhani<span class="brand-period">.</span></span></a>
  <nav id="primary-nav" class="primary-nav" aria-label="Main navigation">
    <a href="/#work"${current === 'home' ? ' aria-current="page"' : ''}>Work</a><a href="/about"${current === 'about' ? ' aria-current="page"' : ''}>About</a>
  </nav>
  <div class="header-actions">${resume('button resume-button')}<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="menu-label">Menu</span><span aria-hidden="true" class="menu-icon"></span></button></div>
</div></header>`;
const footer = `<footer id="contact" class="site-footer"><div class="footer-top">
  <div><h2>Let's Connect!</h2></div>
  <div class="footer-contact"><a class="email-link" href="mailto:${e(site.email)}">${e(site.email)} ${arrow}</a><div class="footer-links"><a href="${e(site.linkedin)}" target="_blank" rel="noopener">LinkedIn ${arrow}<span class="sr-only"> (opens in a new tab)</span></a>${resume()}</div></div>
</div><div class="footer-bottom"><a href="/">${e(site.name)}</a><span>© 2026 · Made with love from NYC</span></div></footer>`;
const picture = p => `<figure class="project-media ${p.id}"><a class="image-link" href="/assets/${e(p.image)}" target="_blank" rel="noopener" aria-label="View larger ${e(p.name)} project visual (opens in a new tab)"><img src="/assets/${e(p.image)}" width="${p.width}" height="${p.height}" alt="${e(p.alt)}" ${p.id === 'rokt' ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><span class="image-expand" aria-hidden="true">↗</span></a><figcaption>${e(p.caption)}${p.credit ? `<br><a href="${e(p.creditUrl)}" target="_blank" rel="noopener">${e(p.credit)}<span class="sr-only"> (opens in a new tab)</span></a>` : ''}</figcaption></figure>`;
const card = (source, index) => { const p = {...source, ...source.home}; return `<article class="project-panel" aria-labelledby="${p.id}-title"><div class="project-copy"><p class="project-name"><span class="project-index">0${index + 1}</span> ${e(p.name)}</p><h3 id="${p.id}-title">${e(p.title)}</h3><p class="project-summary">${e(p.summary)}</p><ul class="tags" aria-label="Project categories">${p.tags.map(t => `<li>${e(t)}</li>`).join('')}</ul>${p.hideOutcome ? '' : `<div class="outcome"><strong>${e(p.outcome)}</strong><span>${e(p.outcomeLabel)}</span></div>`}<a class="button project-button" href="/work/${e(p.slug)}">View case study ${arrow}<span class="sr-only">: ${e(p.name)}</span></a><p class="project-meta">${e(p.role)} <span aria-hidden="true">·</span> ${e(p.timeline)}</p></div>${picture(p)}</article>`; };
const home = `<section class="hero hero-compact" aria-labelledby="hero-title"><h1 id="hero-title">${e(site.hero.headline)}</h1><p class="hero-intro">${e(site.hero.intro)}</p></section>
<section id="work" class="work-section" aria-labelledby="work-title"><div class="section-heading"><h2 id="work-title"><a class="work-cue" href="#project-list"><span class="work-cue-label">Selected work</span><svg aria-hidden="true" width="18" height="22" viewBox="0 0 18 22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3v15m-5-5 5 5 5-5"/></svg></a></h2></div><div id="project-list" class="project-list">${site.projects.map(card).join('')}</div></section>`;
async function page(route, title, description, body, current) {
  const dir = path.join(root, 'dist', route);
  await mkdir(dir, {recursive:true});
  const detailAssets = current === 'home' ? '' : `<link rel="stylesheet" href="/details.css"><link rel="stylesheet" href="/${e(current)}.css${current === 'about' ? '?v=2026-11-11-bio-crop' : ''}"><script defer src="/details.js"></script>`;
  await writeFile(path.join(dir, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${e(description)}"><meta name="theme-color" content="#FFFFFF"><title>${e(title)} | Monisha Mansukhani</title><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="preload" href="/assets/manrope-variable.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="/styles.css?v=2026-11-11-home-center">${detailAssets}<script defer src="/navigation.js"></script></head><body>${header(current)}<main id="main" tabindex="-1">${body}</main>${current === 'home' ? '' : imageViewer}${footer}</body></html>`);
}
await page('', 'Product designer for SaaS & AI workflows', 'Monisha Mansukhani’s selected product design work across enterprise UX, AI workflows, civic participation, and consumer experiences.', home, 'home');
const tools = pageTools(site, e);
await page('about', 'About', 'Monisha Mansukhani — architecture, HCI, and product design.', renderAbout(tools), 'about');
const renderers = {rokt: renderRokt, 'block-party': renderBlockParty, iheartmedia: renderIheartmedia};
for (const [index,p] of site.projects.entries()) {
  await page(`work/${p.slug}`, p.name, p.summary, renderers[p.id]({...tools,project:p,next:site.projects[(index+1)%site.projects.length]}),p.id);
}
console.log('Rendered Home, About, and three complete case studies into dist/.');
