const sectionLabels = {
  'rokt-problem': 'The Problem',
  'rokt-evidence': 'Research Insights',
  'rokt-workflow': 'Workflow Design',
  'rokt-review': 'UX Design',
  'rokt-testing': 'Testing & Iteration',
  'rokt-dashboard': 'Final Solution',
  'rokt-impact': 'The Impact',
  'rokt-reflection': 'Reflections',
  'block-party-problem': 'The Problem',
  'block-party-research': 'Research Insights',
  'block-party-exploration': 'Concept Evaluation',
  'block-party-testing': 'Testing & Iterations',
  'block-party-solution': 'Final Solution',
  'block-party-impact': 'The Impact',
  'block-party-reflection': 'Reflections',
  'iheart-problem': 'The Problem',
  'iheart-discovery': 'Research Insights',
  'iheart-exploration': 'Concept Evaluation',
  'iheart-iteration': 'Testing & Iterations',
  'iheart-solution': 'Final Solution',
  'iheart-impact': 'The Impact',
  'iheart-reflection': 'Reflections'
};

export function pageTools(site, e) {
  const caseNav = items => `<nav class="case-section-nav" aria-label="On This Page"><details open><summary>On This Page</summary><div class="case-section-links">${items.map(id => `<a href="#${e(id)}"><span>${e(sectionLabels[id])}</span></a>`).join('')}</div></details></nav>`;
  const media = ({src, alt, caption, width, height, className = '', eager = false}) => `
    <figure class="case-figure ${e(className)}">
      <a class="inspect-link" data-inspect href="${e(src)}" target="_blank" rel="noopener" aria-label="Inspect image: ${e(alt)} (opens larger)">
        <img src="${e(src)}" alt="${e(alt)}" width="${width}" height="${height}" loading="${eager ? 'eager' : 'lazy'}" decoding="async" ${eager ? 'fetchpriority="high"' : ''}>
      </a>${caption ? `<figcaption>${e(caption)}</figcaption>` : ''}
    </figure>`;
  const section = ({id, title, body, className = ''}) => `
    <section id="${e(id)}" class="case-section ${e(className)}" aria-labelledby="${e(id)}-title">
      <div class="case-section-heading">${sectionLabels[id] ? `<p class="eyebrow case-section-label">${e(sectionLabels[id])}</p>` : ''}<h2 id="${e(id)}-title">${e(title)}</h2></div>
      <div class="case-section-content">${body}</div>
    </section>`;
  const caseHeader = ({kicker, title, summary, tags = []}) => `
    <header class="case-hero">
      <p class="eyebrow">${e(kicker)}</p><h1>${e(title)}</h1><p class="case-lede">${e(summary)}</p>
      <ul class="tags case-tags" aria-label="Project categories">${tags.map(t => `<li>${e(t)}</li>`).join('')}</ul>
    </header>`;
  const overview = ({summary, metadata, outcome}) => `
    <section class="case-overview case-wrap" aria-label="Project overview"><h2 class="overview-title">Overview</h2><div class="case-prose">${summary}
    ${outcome ? `<aside class="case-callout" aria-label="Key Impact"><h3>Key Impact</h3><strong>${e(outcome.title)}</strong><p>${e(outcome.body)}</p></aside>` : ''}</div>
    <dl class="case-metadata">${metadata.map(([label,value]) => `<div><dt>${e(label)}</dt><dd>${e(value)}</dd></div>`).join('')}</dl></section>`;
  const productLink = (href, label) => `<div class="case-product-link"><a class="button" href="${e(href)}" target="_blank" rel="noopener">${e(label)} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a></div>`;
  const preview = ({id, title, description, src, externalUrl, image, alt, width, height, loadLabel = 'Load Demo', unavailable}) => unavailable && !src ? `
    <section id="${e(id)}" class="interactive-preview" aria-labelledby="${e(id)}-title"><div class="preview-heading"><h2 id="${e(id)}-title">${e(title)}</h2><p>${e(unavailable)}</p></div><a class="text-link" href="${e(externalUrl)}" target="_blank" rel="noopener">Open Figma Prototype <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a></section>` : `
    <section id="${e(id)}" class="interactive-preview" aria-labelledby="${e(id)}-title" ${src ? `data-demo-src="${e(src)}"` : ''}>
      <div class="preview-heading"><div><h2 id="${e(id)}-title">${e(title)}</h2>${description ? `<p>${e(description)}</p>` : ''}</div></div>
      <div class="preview-static">${media({src:image,alt,caption:'',width,height})}</div>
      <div class="embed-host" id="${e(id)}-frame" hidden></div>
      <div class="preview-actions">${src ? `<button type="button" class="button load-demo" aria-controls="${e(id)}-frame">${e(loadLabel)} <span aria-hidden="true">↗</span></button><button type="button" class="text-link unload-demo" hidden>Return to Static Preview</button>` : ''}
      <a class="text-link" href="${e(externalUrl)}" target="_blank" rel="noopener">${src ? 'Open Demo in a New Tab' : externalUrl.includes('figma.com') ? 'Open Figma Prototype' : 'Open Original Source'} <span aria-hidden="true">↗</span><span class="sr-only"> (opens in a new tab)</span></a></div>
    </section>`;
  const nextProject = project => `<nav class="next-project" aria-label="Next project"><div><p class="eyebrow">Next project</p><a href="/work/${e(project.slug)}"><h2>${e(project.name)} <span aria-hidden="true">↗</span></h2><p>${e(project.title)}</p></a></div></nav>`;
  return {site, e, media, section, caseHeader, overview, preview, nextProject, caseNav, productLink};
}

export const imageViewer = `<dialog class="image-viewer" aria-labelledby="viewer-title"><div class="viewer-toolbar"><h2 id="viewer-title">Project visual</h2><div><button type="button" class="viewer-zoom" aria-pressed="false">Zoom In</button><a class="viewer-original" target="_blank" rel="noopener">Open Image ↗<span class="sr-only"> (opens in a new tab)</span></a><button type="button" class="viewer-close" aria-label="Close Image Viewer">Close <span aria-hidden="true">×</span></button></div></div><div class="viewer-canvas" tabindex="0" aria-label="Image viewing area; scroll to inspect when zoomed"><img alt=""></div><p class="viewer-caption"></p></dialog>`;
