$(document).ready(function(){
 $('.slider').slick({
  	nextArrow:'<button type="button" class="right-arrow"><i class="fas fa-chevron-right"></i></button>',
  	prevArrow:'<button type="button" class="left-arrow"><i class="fas fa-chevron-left"></i></button>',
    dots: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true
	});

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


 $('#header-nav').slicknav({
	label: 'MENU',
	duplicate: true,
	duration: 300,
	easingOpen: 'swing',
	easingClose: 'swing',
	closeOnClick: true,
	prependTo: '#header-nav-wrap'
	});
});

















