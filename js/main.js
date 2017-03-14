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

    //open up, open up, your hearth, open up your hearth
      $(".navColapseNuevos").hide();
        $(".arrow-up").hide();
        $(".busqTitulo").click(function(){
                $(this).next(".navColapseNuevos").slideToggle(500);
                $(this).find(".arrow-up, .arrow-down").toggle(1);
        });






            var $tabs = $('#horizontalTab');
            $tabs.responsiveTabs({
                rotate: false,
                startCollapsed: 'false',
                collapsible: 'accordion',
                setHash: true,

                click: function(e, tab) {
                    $('.info').html('Tab <strong>' + tab.id + '</strong> clicked!');
                },
                activate: function(e, tab) {
                    $('.info').html('Tab <strong>' + tab.id + '</strong> activated!');
                },
                activateState: function(e, state) {
                    //console.log(state);
                    $('.info').html('Switched from <strong>' + state.oldState + '</strong> state to <strong>' + state.newState + '</strong> state!');
                }
            });

            // $('#start-rotation').on('click', function() {
            //     $tabs.responsiveTabs('startRotation', 1000);
            // });
            // $('#stop-rotation').on('click', function() {
            //     $tabs.responsiveTabs('stopRotation');
            // });
            $('#start-rotation').on('click', function() {
                $tabs.responsiveTabs('active');
            });
            $('#enable-tab').on('click', function() {
                $tabs.responsiveTabs('enable', 3);
            });
            // $('#disable-tab').on('click', function() {
            //     $tabs.responsiveTabs('disable', 3);
            // });
            $('.select-tab').on('click', function() {
                $tabs.responsiveTabs('activate', $(this).val());
                event.preventDefault();
            });

});
