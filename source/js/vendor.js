// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: false,
  // slideClass: 'trainers__slide', // swiper-slide
  // slideNextClass: 'trainers__arrow--next', // swiper-slide-next
  // slidePrevClass: 'trainers__arrow--prev', // swiper-slide-prev
  // wrapperClass: 'trainers__slider-wrapper', // swiper-wrapper
  slidesPerView: 1,
  slidesPerGroup: 1,

  // slidesOffsetBefore: 103,
  watchOverflow: false,

  navigation: {
    nextEl: '.trainers__arrow--next',
    prevEl: '.trainers__arrow--prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,
    },
  },
});
