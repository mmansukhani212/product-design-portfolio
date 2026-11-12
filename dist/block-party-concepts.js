// Loops pause off screen; keyboard access provides pause without visible controls.
const conceptMotionPreference = matchMedia('(prefers-reduced-motion: reduce)');
const conceptScenes = [...document.querySelectorAll('[data-concept-scene]')];
for (const scene of conceptScenes) {
  scene.addEventListener('keydown', event => {
    if (![' ', 'Enter'].includes(event.key) || event.repeat || conceptMotionPreference.matches) return;
    event.preventDefault();
    const paused = scene.classList.toggle('is-paused');
    const status = scene.querySelector('[data-concept-status]');
    status.setAttribute('role', 'status');
    status.textContent = `Animation ${paused ? 'paused' : 'playing'}. Press Space to pause or resume.`;
  });
}
if ('IntersectionObserver' in window) {
  const visibility = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-offscreen', !entry.isIntersecting));
  });
  conceptScenes.forEach(scene => visibility.observe(scene));
}

for (const carousel of document.querySelectorAll('[data-bp-slideshow]')) {
  const slides = [...carousel.querySelectorAll('[data-bp-slide]')];
  const controls = [...carousel.querySelectorAll('[data-bp-step]')];
  const status = carousel.querySelector('[data-bp-slide-status]');
  let current = 0;
  const show = next => {
    current = (next + slides.length) % slides.length;
    slides.forEach((slide, index) => { slide.hidden = index !== current; });
    status.textContent = `${current + 1} / ${slides.length} · ${slides[current].getAttribute('aria-label').split(': ')[1]}`;
  };
  controls.forEach(button => {
    button.addEventListener('click', () => show(current + Number(button.dataset.bpStep)));
    button.hidden = false;
  });
  show(0);
}
