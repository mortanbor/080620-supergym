'use strict';

// Slider trainer
var sliderTrainer = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.trainer-button-next',
    prevEl: '.trainer-button-prev'
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40
    }
  }
});
