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