// Images remain ordinary open-image links when JavaScript is unavailable.
const viewer = document.querySelector('.image-viewer');
let imageTrigger;
if (viewer && typeof viewer.showModal === 'function') {
  const image = viewer.querySelector('.viewer-canvas img');
  const canvas = viewer.querySelector('.viewer-canvas');
  const zoom = viewer.querySelector('.viewer-zoom');
  const setZoom = expanded => {
    zoom.setAttribute('aria-pressed', String(expanded));
    zoom.textContent = expanded ? 'Fit to screen' : 'Zoom in';
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
  const status = preview.querySelector('.preview-status');
  load.addEventListener('click', () => {
    const url = new URL(preview.dataset.demoSrc);
    if (url.origin !== 'https://roktcidash.netlify.app') return;
    const frame = document.createElement('iframe');
    frame.title = 'Rokt competitive-intelligence demo — fictional data';
    frame.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-popups');
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.src = url.href;
    frame.addEventListener('load', () => {
      status.textContent = 'Dummy-data demo requested. If it is blank or unavailable, use the external open link or return to the static preview.';
    });
    host.replaceChildren(frame);
    host.hidden = false;
    poster.hidden = true;
    load.hidden = true;
    unload.hidden = false;
    status.textContent = 'Loading the external dummy-data demo…';
    unload.focus();
  });
  unload.addEventListener('click', () => {
    host.replaceChildren();
    host.hidden = true;
    poster.hidden = false;
    load.hidden = false;
    unload.hidden = true;
    status.textContent = 'Static preview restored. The demo has been unloaded.';
    load.focus();
  });
}
