const navLinks = Array.from(document.querySelectorAll('.site-nav a'));
const sections = Array.from(document.querySelectorAll('[data-section]'));
const progressBar = document.querySelector('.scroll-progress span');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function updateScrollState() {
  const scrollTop = window.scrollY;
  const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollRange > 0 ? Math.min(100, Math.max(0, (scrollTop / scrollRange) * 100)) : 0;

  if (progressBar) progressBar.style.width = `${progress}%`;

  const marker = scrollTop + Math.min(220, window.innerHeight * 0.32);
  let current = sections[0]?.id;

  sections.forEach((section) => {
    if (marker >= section.offsetTop) current = section.id;
  });

  navLinks.forEach((link) => {
    const active = link.getAttribute('href') === `#${current}`;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

if (!reducedMotion && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('visible'));
}

document.querySelectorAll('[data-placeholder-link]').forEach((button) => {
  button.addEventListener('click', () => {
    const note = document.querySelector('#link-note');
    if (!note) return;
    note.textContent = 'Contact and resource links can be connected before client launch.';
  });
});

window.addEventListener('scroll', updateScrollState, { passive: true });
window.addEventListener('resize', updateScrollState, { passive: true });
updateScrollState();
