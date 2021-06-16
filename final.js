$(document).ready(function() {
  $('.top_slider').slick({
    dots: false,
    infinite: true,
    //              centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //              centerPadding: '220px',
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev slick-arrow" aria-label="Previous" role="button" style="display: block;">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next slick-arrow" aria-label="Next" role="button" style="display: block;">Next</button>'

  });

});