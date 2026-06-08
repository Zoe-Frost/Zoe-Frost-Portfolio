/* ── REVEAL ON SCROLL ── */
(function () {
  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.intersectionRatio >= 0.15) e.target.classList.add('in-view');
      else e.target.classList.remove('in-view');
    });
  }, { threshold: [0, 0.1, 0.15, 0.3, 0.5] });
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
}());

/* ── SLIDING STRIP pause on hover ── */
(function () {
  var slider = document.querySelector('.hero-slider');
  if (!slider) return;
  slider.querySelectorAll('.hero-slide-img').forEach(function (img) {
    img.addEventListener('mouseenter', function () { slider.classList.add('paused'); });
    img.addEventListener('mouseleave', function () { slider.classList.remove('paused'); });
  });
}());

/* ── LAB CAROUSEL ── */
(function () {
  var track = document.getElementById('carouselTrack');
  if (!track) return;
  var dots = Array.from(document.querySelectorAll('.carousel-dot'));
  var total = dots.length, current = 0;
  function goTo(i) {
    current = (i + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function (d, j) { d.classList.toggle('active', j === current); });
  }
  var p = document.getElementById('prevBtn'), n = document.getElementById('nextBtn');
  if (p) p.addEventListener('click', function () { goTo(current - 1); });
  if (n) n.addEventListener('click', function () { goTo(current + 1); });
  dots.forEach(function (d, i) { d.addEventListener('click', function () { goTo(i); }); });
}());
