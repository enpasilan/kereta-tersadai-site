;(function( $ ){

/* Fixed header nav with hysteresis buffer to prevent bouncing */
 document.addEventListener("DOMContentLoaded", function(){
   var masthead = document.getElementById('masthead');
   if (!masthead) return;

   var isFixed = false;
   window.addEventListener('scroll', function() {
       var scrollY = window.pageYOffset || document.documentElement.scrollTop;
       var threshold = 120;

       if (scrollY > threshold && !isFixed) {
         masthead.classList.add('fixed-header');
         isFixed = true;
       } else if (scrollY < 40 && isFixed) {
         masthead.classList.remove('fixed-header');
         isFixed = false;
       }
   }, { passive: true });
 }); 

/* Show or Hide Search field on clicking search icon 
$( document ).on( 'click', '.header-search-icon .search-icon', function(e){
	e.preventDefault();
	$( '.header-search-form' ).addClass( 'search-in' );
});

$( '.header-search-form, .search-close' ).on( 'click', function(e) {   
    e.preventDefault();
    if(!$(e.target).is( '.header-search-form input' )) {
        $( '.header-search-form' ).removeClass( 'search-in' );
    }
});*/

/* Mobile slick nav */
$('#navigation').slicknav({
  duration: 300,
  closedSymbol: '<i class="fas fa-plus"></i>',
  openedSymbol: '<i class="fas fa-minus"></i>',
  prependTo: '.mobile-menu-container',
  allowParentLinks: true,
  nestedParentLinks : false,
  label: "Menu", 
  closeOnClick: true, // Close menu when a link is clicked.
});

/* Home client slider 
$('.client-slider').slick({
  dots: false,
  infinite: true,
  speed: 1000,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  autoplay: false,
  responsive: [{
    breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    }, {
    breakpoint: 479,
      settings: {
        slidesToShow: 2,
      }
  }]
});*/

/* Home testimonial slider */
$('.testimonial-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
});

$(document).ready(function(){
  // Ensure animated-line class is active smoothly without layout thrashing intervals
  $('.section-head').addClass('animated-line');
});

/* Single gallery slider 
$('.gallery-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1200,
  slidesToShow: 2,
  adaptiveHeight: false,
  prevArrow: false,
  nextArrow: false,
  responsive: [{
    breakpoint: 479,
      settings: {
        slidesToShow: 1,
      }
  }]
});*/

/* Blog masonry 
function MasonryGrid (){
  $('.grid').masonry({
    // options
    itemSelector: '.grid-item',
  });
}*/

/* product detail slider 
 $('.product-thumbnails').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.product-thumb-nav'
});
$('.product-thumb-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.product-thumbnails',
  dots: false,
  centerMode: true,
  focusOnSelect: true
});*/

$(window).scroll(function() {
  /* back to top */
  if ($(this).scrollTop() > 300) {
    $('#backTotop').fadeIn(200);
  } else {
    $('#backTotop').fadeOut(200);
  }
});
 /* back to top */
$("#backTotop").on( 'click', function(e) {
  e.preventDefault();
  $("html, body").animate({scrollTop: 0}, 1000);
});

/* preloader */
$( window ).on( "load", function() {
  $( '#siteLoader' ).fadeOut( 500 );
  /* Blog masonry 
  MasonryGrid ();*/
});

/*$(document).on( "resize", function(){
  MasonryGrid ();
});*/

// price handel
 /*$( "#slider-range" ).slider({
  range: "max",
  min: 0,
  max: 1000,
  value: 500,
  slide: function( event, ui ) {
    $( "#maxAmount" ).val( ui.value );
  }
});
$( "#maxAmount" ).val( $( "#slider-range" ).slider( "value" ) );*/

/* popup video 
$("#video-container, #video-container-two").modalVideo({
  youtube:{
    controls:0,
    nocookie: true
  }
});*/

/* counter up
$('.counter').counterUp();*/

// cart page input increasing order
/*$('.quantity').prop('disabled', true);
$(document).on('click','.plus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) + 1 );
});
$(document).on('click','.minus-btn',function(e){
  e.preventDefault();
  $('.quantity').val(parseInt($('.quantity').val()) - 1 );
    if ($('.quantity').val() == 0) {
    $('.quantity').val(1);
  }
});*/

})( jQuery );