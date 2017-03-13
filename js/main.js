$(document).ready(function(){


// $('body').flowtype({
//  minimum   : 500,
//  maximum   : 1200,
//  minFont   : 12,
//  maxFont   : 16,
//  fontRatio : 30
// });

    $('.owl-carousel').owlCarousel({
        //autoplay:true,
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
                loop:true
            }
        }
    });

    //open up, open up, open up your hearth
      $(".navColapseNuevos").hide();
        $(".arrow-up").hide();
        $(".busqTitulo").click(function(){
                $(this).next(".navColapseNuevos").slideToggle(500);
                $(this).find(".arrow-up, .arrow-down").toggle(1);
        });

});