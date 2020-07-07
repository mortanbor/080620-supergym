'use strict';

// Slider trainer
var sliderTrainer = new Swiper('.slider--trainer', {
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

// Slider review
var sliderReview = new Swiper('.slider--reviews', {
  loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  navigation: {
    nextEl: '.reviews-button-next',
    prevEl: '.reviews-button-prev'
  }
});

//Phone valid
IMask(document.querySelector('#phonefield'), {
  mask: '+{7}(000)000-00-00',
});

//var
var cardblockLink= document.querySelectorAll('.card-block__link');
var choicecardLists = document.querySelectorAll('.choice-card__list');
var anchors = choicecardLists.querySelectorAll('a[href^="#"]');

// Polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

// Anchors
anchors.forEach(function (anchor) {
  anchor.addEventListener('click', function (evt) {
    evt.preventDefault();
    var href = anchor.getAttribute('href');
    var target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({behavior: 'smooth'});
    }
  });
});

// Add class "active" on subscription__btn and subscription__list
cardblockLink.forEach(function (cardblockLink, index) {
  cardblockLink.addEventListener('click', function () {
    // Tabs button
    cardblockLink.forEach(function (a) {
      btn.classList.remove('card-block__link--active');
    });
    cardblockLink.classList.add('card-block__link--active');

    // Tabs content
    choicecardLists.forEach(function (list) {
      list.classList.remove('choice-card__list--active');
    });
    choicecardLists[index].classList.add('choice-card__list--active');
  });
});
