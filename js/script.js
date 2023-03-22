// ===========================slick slider js for testimonials part start======================
$('.testimonials_slider').slick({
  centerMode: true,
  arrows: false,
  dots: true,
  autoplay: true,
  centerPadding: '445px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// ============================slick slider js for testimonials part end=======================

// ============================mix it up js for our_work part start============================
var mixer = mixitup('.work_part');
// ============================mix it up js for our_work part end==============================