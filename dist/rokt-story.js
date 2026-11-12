const flowTabs = document.querySelector('.rokt-flow-tabs');
if (flowTabs) {
  const tablist = flowTabs.querySelector('[role="tablist"]');
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  function selectTab(index) {
    tabs.forEach((tab, i) => {
      const selected = i === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[i].hidden = !selected;
      if (!selected) panels[i].querySelector('video').pause();
    });
  }
  tabs.forEach((tab, index) => {
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].setAttribute('aria-labelledby', tab.id);
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', event => {
      const destinations = {ArrowRight:(index + 1) % tabs.length, ArrowLeft:(index + tabs.length - 1) % tabs.length, Home:0, End:tabs.length - 1};
      if (!(event.key in destinations)) return;
      event.preventDefault();
      const next = destinations[event.key];
      selectTab(next);
      tabs[next].focus();
    });
  });
  selectTab(0);
  flowTabs.classList.add('is-tabbed');
  tablist.hidden = false;
}
