"use strict";
(() => {
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const nodes = Array.from(document.querySelectorAll('.information-site .card, .why-card, .hero-catalog-showcase, .pd-picture-card, .pd-matrix, .pd-related-card'));
  if (!nodes.length) return;
  // Only opt in after all items are registered, so pages remain fully visible without JS.
  nodes.forEach(n => n.classList.add('ms-reveal'));
  document.documentElement.classList.add('ms-motion-ready');
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }, { rootMargin: '0px 0px 35px 0px', threshold: 0.06 });
  nodes.forEach(node => observer.observe(node));
})();
