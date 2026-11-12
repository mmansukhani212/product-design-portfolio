// Enhance the actual-screen walkthrough; every screen remains visible without JS.
for (const walkthrough of document.querySelectorAll('[data-rokt-walkthrough]')) {
  const controls = walkthrough.querySelector('.rokt-walk-controls');
  const buttons = [...controls.querySelectorAll('[data-rokt-view]')];
  const panels = [...walkthrough.querySelectorAll('[data-rokt-panel]')];
  const status = walkthrough.querySelector('.rokt-walk-status');
  const select = (view, announce = false) => {
    const selected = panels.find(panel => panel.dataset.roktPanel === view);
    if (!selected) return;
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.roktView === view)));
    panels.forEach(panel => { panel.hidden = panel !== selected; });
    if (announce) status.textContent = selected.querySelector('figcaption').textContent;
  };
  buttons.forEach(button => button.addEventListener('click', () => select(button.dataset.roktView, true)));
  walkthrough.dataset.roktEnhanced = '';
  select('queue');
  controls.hidden = false;
}
