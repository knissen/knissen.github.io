(function () {
  'use strict';

  const nav = document.querySelector('nav');

  // Add .scrolled class when page scrolls past the nav height
  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Highlight the active nav link as the user scrolls through sections
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle(
              'active',
              link.getAttribute('href') === '#' + entry.target.id
            );
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  // Mobile nav toggle
  const hamburger = document.querySelector('.nav-hamburger');
  if (hamburger) {
    hamburger.addEventListener('click', function () {
      nav.classList.toggle('nav-open');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('nav-open');
      });
    });
  }

  // Make entire project card clickable via data-href attribute
  document.querySelectorAll('.project-card[data-href]').forEach(function (card) {
    card.addEventListener('click', function () {
      window.location.href = card.dataset.href;
    });
  });

}());
