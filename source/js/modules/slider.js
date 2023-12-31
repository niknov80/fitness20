export const sliderInit = () => {
  const swiper = new Swiper('.trainers__slider', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

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

  const reviweSlider = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: false,
    autoHeight: true,
    slidesPerView: 1,
    slidesPerGroup: 1,

    navigation: {
      nextEl: '.reviews__arrow--next',
      prevEl: '.reviews__arrow--prev',
    },
  });
};
