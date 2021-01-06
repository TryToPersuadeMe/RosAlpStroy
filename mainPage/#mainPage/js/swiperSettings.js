new Swiper(".sliderGallery__slider", {
  pagination: {
    el: ".sliderGallery__pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".sliderGallery__button-next",
    prevEl: ".sliderGallery__button-prev",
  },
  grabCursor: true,
  preloadImages: false,
  lazy: {
    loadOnTransitionStart: true,
    loadPrevNext: true,
  },

  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  spaceBetween: 50,
  breakpoints: {
    319: {
      slidesPerGroup: 1,
      spaceBetween: 50,
      slidesPerView: 1,
    },
    769: {
      slidesPerGroup: 2,
      spaceBetween: 35,
      slidesPerView: 2,
    },

    1001: {
      slidesPerGroup: 3,
      slidesPerView: 3,
    },
  },

  speed: 800,
});
