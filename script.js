const swiper = new Swiper('.slider-wrapper', {

  loop: true,
  grabCursor: true,
  spaceBetween : 90,
  
  //  pagination
  pagination: {
    el: '.swiper-pagination',
  },

  breakpoints: {
    0:{
      slidesPerView: 1
    },
    620:{
      slidesPerView: 2
    },
    1024:{
      slidesPerView: 3
    }
  }

});