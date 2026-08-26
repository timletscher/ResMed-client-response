const expandableTriggers = document.querySelectorAll('.expandable__trigger');
const nestedTriggers = document.querySelectorAll('.expandable__nested-trigger');
const metricCards = document.querySelectorAll('.metric-card');
const expandAllButton = document.querySelector('[data-expand-all="questions"]');

function setExpandedState(element, isExpanded) {
  const trigger = element.querySelector('.expandable__trigger, .expandable__nested-trigger');
  if (!trigger) return;

  const ariaValue = isExpanded ? 'true' : 'false';
  trigger.setAttribute('aria-expanded', ariaValue);
  element.classList.toggle('expandable--active', isExpanded);
  if (element.classList.contains('expandable__nested')) {
    element.classList.toggle('expandable__nested--active', isExpanded);
  }
}

expandableTriggers.forEach((trigger) => {
  const accordion = trigger.closest('.expandable');

  trigger.addEventListener('click', () => {
    const nextState = !accordion.classList.contains('expandable--active');
    setExpandedState(accordion, nextState);
  });
});

nestedTriggers.forEach((trigger) => {
  const nestedWrap = trigger.closest('.expandable__nested');

  trigger.addEventListener('click', () => {
    const nextState = !nestedWrap.classList.contains('expandable__nested--active');
    setExpandedState(nestedWrap, nextState);
  });
});

metricCards.forEach((card) => {
  card.addEventListener('click', () => {
    card.classList.toggle('metric-card--active');
  });
});

if (expandAllButton) {
  expandAllButton.addEventListener('click', () => {
    const sectionCards = document.querySelectorAll('#strategic-questions .expandable');
    const shouldExpand = !Array.from(sectionCards).every((card) => card.classList.contains('expandable--active'));

    sectionCards.forEach((card) => {
      setExpandedState(card, shouldExpand);
    });

    expandAllButton.textContent = shouldExpand ? 'Collapse all questions' : 'Expand all questions';
  });
}

const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('main section[id]');

function updateActiveNav() {
  const scrollPosition = window.scrollY + 160;

  let currentId = 'opportunity';
  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const isActive = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('nav__link--active', isActive);
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
updateActiveNav();
