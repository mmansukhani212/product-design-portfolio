// Concept illustrations stay still until requested; no script leaves useful stills.
const reducedConceptMotion = matchMedia('(prefers-reduced-motion: reduce)');
for (const scene of document.querySelectorAll('[data-concept-scene]')) {
  const button = scene.querySelector('button');
  const label = button.getAttribute('aria-label');
  const setPlaying = playing => {
    scene.classList.toggle('is-playing', playing);
    button.setAttribute('aria-pressed', String(playing));
    button.textContent = playing ? 'Pause Animation' : 'Play Animation';
    button.setAttribute('aria-label', playing ? label.replace('Play ', 'Pause ') : label);
  };
  const applyMotionPreference = () => {
    setPlaying(false);
    button.disabled = reducedConceptMotion.matches;
    if (button.disabled) button.textContent = 'Still Preview';
  };
  button.addEventListener('click', () => {
    if (!reducedConceptMotion.matches) setPlaying(button.getAttribute('aria-pressed') !== 'true');
  });
  reducedConceptMotion.addEventListener('change', applyMotionPreference);
  applyMotionPreference();
  button.hidden = false;
}
