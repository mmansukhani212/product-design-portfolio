// Keep attention on one user-requested walkthrough at a time.
document.addEventListener('play', event => {
  if (!(event.target instanceof HTMLVideoElement) || !event.target.closest('.rokt-flow')) return;
  for (const video of document.querySelectorAll('.rokt-flow video')) {
    if (video !== event.target) video.pause();
  }
}, true);
