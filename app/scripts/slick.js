(function () {
  'use strict';

  const $carousel = $('.js-carousel');
  const options = {
    // arrows: true,
    appendArrows: $('.js-carousel-arrows'),
    prevArrow: '<button class="brands__arrows-left"><</button>',
    nextArrow: '<button class="brands__arrows-right">></button>',
    // infinite: true,
    // lazyLoad: 'progressive',
    // pauseOnHover: true,
    // TODO: check for viewport (CSS class)
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    mobileFirst: true,
    slide: '.brands__item'
  };

  init();

  function init () {
    $carousel.slick(options);
  }

})();
