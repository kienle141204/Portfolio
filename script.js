// ── Typed text effect ──
const phrases = [
  'AI Engineer',
  'LLM Developer',
  'NLP Enthusiast',
  'CS Student @ HUST',
];

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.querySelector('.typed-text');

function type() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    typedEl.textContent = current.slice(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? 60 : 90);
}

type();

// ── Scroll reveal ──
const revealEls = document.querySelectorAll(
  '.skill-card, .edu-card, .project-card, .contact-card, .section-title'
);

revealEls.forEach(el => el.classList.add('reveal'));

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

revealEls.forEach(el => observer.observe(el));

// ── Nav active link highlight ──
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 80) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--text)'
      : '';
  });
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
});

// Close menu on link click
navLinksEl.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinksEl.classList.remove('open'));
});
