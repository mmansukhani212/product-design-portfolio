// Native anchors and disclosure remain usable without JavaScript.
for (const nav of document.querySelectorAll('.case-section-nav')) {
  const disclosure = nav.querySelector('details');
  const desktop = matchMedia('(min-width: 960px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  const targets = links.map(link => document.getElementById(link.hash.slice(1)));
  const setLayout = () => { disclosure.open = desktop.matches; };
  setLayout();
  desktop.addEventListener('change', setLayout);
  const markCurrent = index => links.forEach((link, i) => {
    if (i === index) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
  let scheduled = false;
  const updateCurrent = () => {
    scheduled = false;
    const threshold = 136;
    let index = -1;
    targets.forEach((target, i) => { if (target.getBoundingClientRect().top <= threshold) index = i; });
    markCurrent(index);
  };
  const scheduleCurrent = () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateCurrent); }
  };
  window.addEventListener('scroll', scheduleCurrent, {passive: true});
  window.addEventListener('resize', scheduleCurrent, {passive: true});
  updateCurrent();
  links.forEach((link, index) => link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    if (!desktop.matches) disclosure.open = false;
    const target = targets[index];
    history.pushState(null, '', link.hash);
    target.tabIndex = -1;
    target.focus({preventScroll: true});
    target.scrollIntoView({behavior: event.detail === 0 || reducedMotion.matches ? 'instant' : 'smooth', block: 'start'});
    markCurrent(index);
  }));
}

// Images remain ordinary open-image links when JavaScript is unavailable.
const viewer = document.querySelector('.image-viewer');
let imageTrigger;
if (viewer && typeof viewer.showModal === 'function') {
  const image = viewer.querySelector('.viewer-canvas img');
  const canvas = viewer.querySelector('.viewer-canvas');
  const zoom = viewer.querySelector('.viewer-zoom');
  const setZoom = expanded => {
    zoom.setAttribute('aria-pressed', String(expanded));
    zoom.textContent = expanded ? 'Fit to Screen' : 'Zoom In';
    canvas.classList.toggle('is-zoomed', expanded);
    image.style.width = expanded ? `${Math.max(image.naturalWidth, 1000)}px` : '';
  };
  document.addEventListener('click', event => {
    const link = event.target.closest('[data-inspect]');
    if (!link || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || event.button !== 0) return;
    event.preventDefault();
    imageTrigger = link;
    const sourceImage = link.querySelector('img');
    image.src = link.href;
    image.alt = sourceImage.alt;
    viewer.querySelector('.viewer-original').href = link.href;
    viewer.querySelector('.viewer-caption').textContent = link.closest('figure').querySelector('figcaption')?.textContent || sourceImage.alt;
    setZoom(false);
    viewer.showModal();
    viewer.querySelector('.viewer-close').focus();
  });
  zoom.addEventListener('click', () => setZoom(zoom.getAttribute('aria-pressed') !== 'true'));
  viewer.querySelector('.viewer-close').addEventListener('click', () => viewer.close());
  viewer.addEventListener('close', () => {setZoom(false); imageTrigger?.focus();});
  viewer.addEventListener('click', event => {if (event.target === viewer) viewer.close();});
}

// No iframe or third-party request exists until the visitor explicitly loads it.
for (const preview of document.querySelectorAll('[data-demo-src]')) {
  const load = preview.querySelector('.load-demo');
  const unload = preview.querySelector('.unload-demo');
  const host = preview.querySelector('.embed-host');
  const poster = preview.querySelector('.preview-static');
  load.addEventListener('click', () => {
    const url = new URL(preview.dataset.demoSrc);
    if (!['https://mmansukhani212.github.io/rokt-competitive-intelligence-dashboard/', 'https://mmansukhani212.github.io/block-party/'].includes(url.href)) return;
    const frame = document.createElement('iframe');
    frame.title = `${document.title.split(' | ')[0]}: interactive prototype with mock data`;
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.src = url.href;
    host.setAttribute('aria-busy', 'true');
    frame.addEventListener('load', () => host.removeAttribute('aria-busy'));
    host.replaceChildren(frame);
    host.hidden = false;
    poster.hidden = true;
    load.hidden = true;
    unload.hidden = false;
    unload.focus();
  });
  unload.addEventListener('click', () => {
    host.replaceChildren();
    host.hidden = true;
    poster.hidden = false;
    load.hidden = false;
    unload.hidden = true;
    host.removeAttribute('aria-busy');
    load.focus();
  });
}
