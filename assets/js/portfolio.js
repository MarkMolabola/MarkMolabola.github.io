// ── Word cycling animation ──────────────────────────────────────────────────
const wordList = ['software.', 'mobile apps.', 'games.', 'web APIs.'];
let wordIdx = 0;
const wordEl = document.querySelector('.hero-word');

if (wordEl) {
  setInterval(() => {
    wordEl.classList.add('fading');
    setTimeout(() => {
      wordIdx = (wordIdx + 1) % wordList.length;
      wordEl.textContent = wordList[wordIdx];
      wordEl.classList.remove('fading');
    }, 280);
  }, 2600);
}

// ── Carousel logic ──────────────────────────────────────────────────────────
document.querySelectorAll('.carousel').forEach(carousel => {
  const imgs = carousel.querySelectorAll('.carousel-images img');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');
  let idx = 0;

  function show(n) {
    imgs[idx].classList.remove('active');
    idx = (n + imgs.length) % imgs.length;
    imgs[idx].classList.add('active');
  }

  if (prev) prev.addEventListener('click', () => show(idx - 1));
  if (next) next.addEventListener('click', () => show(idx + 1));
});

// ── Mobile nav toggle ───────────────────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a =>
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// ── Fade-up on scroll ───────────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(
  '.project-card, .mini-card, .skill-group, .section-header, .contact-form, .contact-left'
).forEach(el => {
  el.classList.add('fade-up');
  observer.observe(el);
});
