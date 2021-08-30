// Navegacion Pegada 
$(document).ready(function () {
  $(window).bind('scroll', function () {
      var navHeight = $(window).height() * 0.02;
      if ($(window).scrollTop() > navHeight) {
          $('#nav').addClass('scrolled');
          $('.button').addClass('scrolled');
      } else {
          $('#nav').removeClass('scrolled');
          $('.button').removeClass('scrolled');
      }
  });
});

window.addEventListener('load', function(){
    new Glider(this.document.querySelector('.carousel-list'),{
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: false,
        arrows: {
          prev: '.carousel-previous',
          next: '.carousel-next'
        },
        responsive: [
            {
              // screens greater than >= 768px
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },{
                // screens greater than > 1440px
                breakpoint: 1441,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                }
            }
          ]
    });
});

// var nav = $('#nav');

// $(window).scroll(function(){
//   if($(window).scrollTop() > 150){
//     nav.addClass('scrolled');
//   } else{
//     nav.removeClass('scrolled');
//   }
// });

// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '300');
// });