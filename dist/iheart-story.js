// Both versions and all recording links remain available without JavaScript.
for (const comparison of document.querySelectorAll('[data-comparison]')) {
  const controls = comparison.querySelector('.story-compare-controls');
  const buttons = [...controls.querySelectorAll('[data-compare-view]')];
  const panels = [...comparison.querySelectorAll('[data-compare-panel]')];
  const select = value => {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.compareView === value)));
    panels.forEach(panel => { panel.hidden = panel.dataset.comparePanel !== value; });
  };
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.compareView)));
  comparison.dataset.enhanced = '';
  select('before');
  controls.hidden = false;
}
for (const demo of document.querySelectorAll('.story-demo')) {
  const button = demo.querySelector('[data-video-src]');
  const video = demo.querySelector('video');
  const poster = demo.querySelector('.story-video-poster');
  const status = demo.querySelector('.story-video-status');
  button.hidden = false;
  button.addEventListener('click', async () => {
    const url = new URL(button.dataset.videoSrc, location.href);
    if (url.origin !== location.origin || !/\/assets\/iheart-demo-(onboarding|dedication|podcast)\.mp4$/.test(url.pathname)) return;
    video.src = url.href;
    video.hidden = false;
    poster.hidden = true;
    button.hidden = true;
    status.textContent = '';
    video.focus();
    try { await video.play(); }
    catch { status.textContent = 'Use the video controls to play, or open the recording in a new tab.'; }
  });
  video.addEventListener('error', () => {
    video.hidden = true;
    poster.hidden = false;
    button.hidden = false;
    status.textContent = 'This preview could not load. Use Open Recording below.';
  });
}
document.addEventListener('play', event => {
  if (!(event.target instanceof HTMLVideoElement)) return;
  for (const video of document.querySelectorAll('.story-demo video')) {
    if (video !== event.target) video.pause();
  }
}, true);
