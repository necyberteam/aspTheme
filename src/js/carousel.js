(function () {
  'use strict';

  function initCarousel(el, itemsPerSlide, interval) {
    const inner = el.querySelector('.carousel-inner');
    const items = Array.from(el.querySelectorAll('.carousel-item'));
    const total = items.length;
    let timer = null;

    if (total <= itemsPerSlide) return;

    // Clone first itemsPerSlide items and append so wrap-around looks seamless.
    items.slice(0, itemsPerSlide).forEach(function (item) {
      inner.appendChild(item.cloneNode(true));
    });

    const itemWidth = 100 / itemsPerSlide;
    let current = 0;

    function goTo(idx, animate) {
      if (animate === false) {
        inner.style.transition = 'none';
      } else {
        inner.style.transition = '';
      }
      current = idx;
      inner.style.transform = 'translateX(-' + (current * itemWidth) + '%)';
    }

    // After sliding into the clones, snap silently back to the real items.
    inner.addEventListener('transitionend', function () {
      if (current >= total) {
        goTo(current - total, false);
      }
      if (current < 0) {
        goTo(current + total, false);
      }
    });

    function startAuto() {
      timer = setInterval(function () { goTo(current + 1, true); }, interval);
    }

    function resetAuto() {
      clearInterval(timer);
      startAuto();
    }

    el.querySelector('[data-slide="prev"]')?.addEventListener('click', function (e) {
      e.preventDefault();
      goTo(current - 1, true);
      resetAuto();
    });

    el.querySelector('[data-slide="next"]')?.addEventListener('click', function (e) {
      e.preventDefault();
      goTo(current + 1, true);
      resetAuto();
    });

    startAuto();
  }

  document.addEventListener('DOMContentLoaded', function () {
    var projectSlider = document.querySelector('#projectSlider');
    if (projectSlider) initCarousel(projectSlider, 3, 5000);

    var studentSlider = document.querySelector('#studentSlider');
    if (studentSlider) initCarousel(studentSlider, 5, 5000);

    var mentorSlider = document.querySelector('#mentorSlider');
    if (mentorSlider) initCarousel(mentorSlider, 3, 5000);

    var researcherSlider = document.querySelector('#researcherSlider');
    if (researcherSlider) initCarousel(researcherSlider, 3, 5000);
  });
})();
