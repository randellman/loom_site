  $('.slider').slick({
  	nextArrow:'<button type="button" class="right-arrow"><i class="fas fa-angle-right "></i></button>',
  	prevArrow:'<button type="button" class="left-arrow"><i class="fas fa-angle-left "></i></button>',
    dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
  });

  $(document).ready(function(){
  $('.customers-slider').slick({
    dots: true,
    speed: 500,
	slidesToShow: 1,
	autoplay: true,
	arrows: false,
	autoplaySpeed:3000,	
	pauseOnDotsHover: true,
	pauseOnFocus: true,
	pauseOnHover: true,
	swipeToSlide: true,
  });
});






















