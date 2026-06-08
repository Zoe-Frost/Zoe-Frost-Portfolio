// ── REVEAL ON SCROLL ──
(function() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio >= 0.15) entry.target.classList.add('in-view');
      else entry.target.classList.remove('in-view');
    });
  }, { threshold: [0, 0.1, 0.15, 0.3, 0.5] });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
})();

// ── SLIDING STRIP (projects + lab pages) ──
(function() {
  const slider = document.querySelector('.hero-slider');
  if (!slider) return;
  const slideImgs = slider.querySelectorAll('.hero-slide-img');
  slideImgs.forEach(img => {
    img.addEventListener('mouseenter', () => slider.classList.add('paused'));
    img.addEventListener('mouseleave', () => slider.classList.remove('paused'));
  });
})();

// ── LAB ENTRY CAROUSEL ──
(function() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;
  const dots = document.querySelectorAll('.carousel-dot');
  const total = dots.length;
  let current = 0;

  function goTo(index) {
    current = (index + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
})();
