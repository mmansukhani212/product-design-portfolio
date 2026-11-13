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
