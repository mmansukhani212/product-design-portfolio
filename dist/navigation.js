document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#primary-nav');
function closeMenu(returnFocus = false) {
  toggle.setAttribute('aria-expanded', 'false');
  nav.classList.remove('is-open');
  if (returnFocus) toggle.focus();
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  if (open) nav.querySelector('a').focus();
});
nav.addEventListener('click', event => {if(event.target.closest('a')) closeMenu();});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header-inner')) closeMenu();
});
document.querySelector('.site-header').addEventListener('focusout', event => {
  if (!event.currentTarget.contains(event.relatedTarget)) closeMenu();
});
matchMedia('(min-width: 768px)').addEventListener('change', () => closeMenu());

// Like the reference, reveal navigation in the opening area, not on every upward scroll.
const scrollJump = document.querySelector('.scroll-jump');
function updateScrollJump() {
  const maxScroll = document.documentElement.scrollHeight - innerHeight;
  const toTop = scrollY >= maxScroll / 2;
  scrollJump.hidden = maxScroll <= 1;
  scrollJump.dataset.direction = toTop ? 'top' : 'bottom';
  const label = toTop ? 'Scroll to Top' : 'Scroll to Bottom';
  scrollJump.setAttribute('aria-label', label);
  scrollJump.title = label;
}
scrollJump.addEventListener('click', () => {
  window.scrollTo({
    top: scrollJump.dataset.direction === 'top' ? 0 : document.documentElement.scrollHeight,
    behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
  });
});
window.addEventListener('resize', () => requestAnimationFrame(updateHeader));
window.addEventListener('load', updateScrollJump);
const header = document.querySelector('.site-header');
const updateHeader = () => {
  updateScrollJump();
  header.classList.toggle('is-away', scrollY > 1000 && !header.contains(document.activeElement));
};
let headerScheduled = false;
window.addEventListener('scroll', () => {
  if (headerScheduled) return;
  headerScheduled = true;
  requestAnimationFrame(() => { headerScheduled = false; updateHeader(); });
}, {passive: true});
window.addEventListener('pageshow', updateHeader);
header.addEventListener('focusin', () => header.classList.remove('is-away'));
header.addEventListener('focusout', () => requestAnimationFrame(updateHeader));
updateHeader();
