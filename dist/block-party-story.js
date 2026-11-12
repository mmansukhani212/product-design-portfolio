// With no JavaScript, both original-format artifacts stay visible and inspectable.
for (const comparison of document.querySelectorAll('.block-party-page [data-bp-comparison]')) {
  const controls = comparison.querySelector('.bp-version-controls');
  const buttons = [...controls.querySelectorAll('[data-bp-version]')];
  const panels = [...comparison.querySelectorAll('[data-bp-panel]')];
  const select = version => {
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.bpVersion === version)));
    panels.forEach(panel => { panel.hidden = panel.dataset.bpPanel !== version; });
  };
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.bpVersion)));
  select('capstone');
  controls.hidden = false;
}
