$(document).ready(function(){


// $('body').flowtype({
//  minimum   : 500,
//  maximum   : 1200,
//  minFont   : 12,
//  maxFont   : 16,
//  fontRatio : 30
// });

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
  	dots: true,
  	nav: false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});



});