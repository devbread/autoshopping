$(document).ready(function(){$(".owl-carousel").owlCarousel({autoplay:!0,loop:!0,margin:10,dots:!0,nav:!1,responsiveClass:!0,responsive:{0:{items:1,nav:!0},600:{items:1,nav:!1},1e3:{items:1,nav:!0,loop:!0}}}),$(".navColapseNuevos").hide(),$(".arrow-up").hide(),$(".busqTitulo").click(function(){$(this).next(".navColapseNuevos").slideToggle(500),$(this).find(".arrow-up, .arrow-down").toggle(1)}),$("#toggleButton").click(function(){var t=this;$("#disclaimer").slideToggle("slow",function(){$("#disclaimer").is(":visible")?$("span",t).text("Menos Detalles <"):$("span",t).text("Más Detalles >")})});var t=$("#horizontalTab");t.responsiveTabs({rotate:!1,startCollapsed:"false",collapsible:"accordion",setHash:!0,click:function(t,e){$(".info").html("Tab <strong>"+e.id+"</strong> clicked!")},activate:function(t,e){$(".info").html("Tab <strong>"+e.id+"</strong> activated!")},activateState:function(t,e){$(".info").html("Switched from <strong>"+e.oldState+"</strong> state to <strong>"+e.newState+"</strong> state!")}}),$("#start-rotation").on("click",function(){t.responsiveTabs("active")}),$("#enable-tab").on("click",function(){t.responsiveTabs("enable",3)}),$(".select-tab").on("click",function(){t.responsiveTabs("activate",$(this).val()),event.preventDefault()})}),function($,t){function e(){var t=0;o.each(function(){$t=$(this),$t.css("height",""),t=Math.max(t,$t.height())}),o.height(t)}var o;$(function(){o=$(".my-inline-block-class"),e(),o.on("load",e),$(t).load(e),$(t).resize(e)})}(jQuery,window);