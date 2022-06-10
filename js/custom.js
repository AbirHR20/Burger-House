$(document).ready(function(){
    //events slider
    $('.events-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        responsive : [{
          breakpoint : 576,
          settings : {
              dots : false,
              arrows : false,
          }
      }]
      });
});