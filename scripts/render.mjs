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
    <a href="/#work"${current === 'home' ? ' aria-current="page"' : ''}>Work</a><a href="/about"${current === 'about' ? ' aria-current="page"' : ''}>About</a><a href="#contact">Contact</a>
  </nav>
  <div class="header-actions">${resume('button resume-button')}<button class="menu-toggle" type="button" aria-expanded="false" aria-controls="primary-nav"><span class="menu-label">Menu</span><span aria-hidden="true" class="menu-icon"></span></button></div>
</div></header>`;
const footer = `<footer id="contact" class="site-footer"><div class="footer-top">
  <div><h2>Let’s talk.</h2></div>
  <div class="footer-contact"><a class="email-link" href="mailto:${e(site.email)}">${e(site.email)} ${arrow}</a><div class="footer-links"><a href="${e(site.linkedin)}" target="_blank" rel="noopener">LinkedIn ${arrow}<span class="sr-only"> (opens in a new tab)</span></a>${resume()}</div></div>
</div><div class="footer-bottom"><a href="/">${e(site.name)}</a><span>© 2026</span></div></footer>`;
const picture = p => `<figure class="project-media ${p.id}"><a class="image-link" href="/assets/${e(p.image)}" target="_blank" rel="noopener" aria-label="View larger ${e(p.name)} project visual (opens in a new tab)"><img src="/assets/${e(p.image)}" width="${p.width}" height="${p.height}" alt="${e(p.alt)}" ${p.id === 'rokt' ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async"><span class="image-expand" aria-hidden="true">↗</span></a><figcaption>${e(p.caption)}${p.credit ? `<br><a href="${e(p.creditUrl)}" target="_blank" rel="noopener">${e(p.credit)}<span class="sr-only"> (opens in a new tab)</span></a>` : ''}</figcaption></figure>`;
const card = (source, index) => { const p = {...source, ...source.home}; return `<article class="project-panel" aria-labelledby="${p.id}-title"><div class="project-copy"><p class="project-name"><span class="project-index">0${index + 1}</span> ${e(p.name)}</p><h3 id="${p.id}-title">${e(p.title)}</h3><p class="project-summary">${e(p.summary)}</p><ul class="tags" aria-label="Project categories">${p.tags.map(t => `<li>${e(t)}</li>`).join('')}</ul>${p.hideOutcome ? '' : `<div class="outcome"><strong>${e(p.outcome)}</strong><span>${e(p.outcomeLabel)}</span></div>`}<a class="button project-button" href="/work/${e(p.slug)}">View case study ${arrow}<span class="sr-only">: ${e(p.name)}</span></a><p class="project-meta">${e(p.role)} <span aria-hidden="true">·</span> ${e(p.timeline)}</p></div>${picture(p)}</article>`; };
const home = `<section class="hero hero-compact" aria-labelledby="hero-title"><p class="eyebrow">${e(site.hero.eyebrow)}</p><h1 id="hero-title">${e(site.hero.headline)}<br> <span>${e(site.hero.accent)}</span></h1></section>
<section id="work" class="work-section" aria-labelledby="work-title"><div class="section-heading"><h2 id="work-title">Work</h2></div><div class="project-list">${site.projects.map(card).join('')}</div></section>
<section class="credibility" aria-labelledby="perspective-title"><div><h2 id="perspective-title">Background</h2><a class="text-link" href="/about">More about me ${arrow}</a></div><dl><div><dt>Architecture → product design</dt><dd>A spatial approach to digital products.</dd></div><div><dt>M.S. HCI & Design</dt><dd>Indiana University Bloomington</dd></div><div><dt>UX + automation</dt><dd>Research, interface design, and CRM workflows at Rokt.</dd></div></dl></section>`;
async function page(route, title, description, body, current) {
  const dir = path.join(root, 'dist', route);
  await mkdir(dir, {recursive:true});
  const detailAssets = current === 'home' ? '' : `<link rel="stylesheet" href="/details.css"><link rel="stylesheet" href="/${e(current)}.css"><script defer src="/details.js"></script>`;
  await writeFile(path.join(dir, 'index.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="${e(description)}"><meta name="theme-color" content="#F8FBFA"><title>${e(title)} | Monisha Mansukhani</title><link rel="icon" href="/assets/favicon.svg" type="image/svg+xml"><link rel="preload" href="/assets/manrope-variable.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="/styles.css">${detailAssets}<script defer src="/navigation.js"></script></head><body>${header(current)}<main id="main" tabindex="-1">${body}</main>${current === 'home' ? '' : imageViewer}${footer}</body></html>`);
}
await page('', 'Product designer for SaaS & AI workflows', 'Monisha Mansukhani’s selected product design work across enterprise UX, AI workflows, civic participation, and consumer experiences.', home, 'home');
const tools = pageTools(site, e);
await page('about', 'About', 'Monisha Mansukhani — architecture, HCI, and product design.', renderAbout(tools), 'about');
const renderers = {rokt: renderRokt, 'block-party': renderBlockParty, iheartmedia: renderIheartmedia};
for (const [index,p] of site.projects.entries()) {
  await page(`work/${p.slug}`, p.name, p.summary, renderers[p.id]({...tools,project:p,next:site.projects[(index+1)%site.projects.length]}),p.id);
}
console.log('Rendered Home, About, and three complete case studies into dist/.');
