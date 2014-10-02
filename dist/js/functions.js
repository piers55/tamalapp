


+function ($) { "use strict";

//BOTON DE ON Y OFF ************************************

    $('.btn-toggle').click(function() {
        $(this).find('.btn').toggleClass('active');  
        
        if ($(this).find('.btn-primary').size()>0) {
            $(this).find('.btn').toggleClass('btn-primary');
        }
        if ($(this).find('.btn-danger').size()>0) {
            $(this).find('.btn').toggleClass('btn-danger');
        }
        if ($(this).find('.btn-success').size()>0) {
            $(this).find('.btn').toggleClass('btn-success');
        }
        if ($(this).find('.btn-info').size()>0) {
            $(this).find('.btn').toggleClass('btn-info');
        }
        
        $(this).find('.btn').toggleClass('btn-default');
           
    });

    $('form').submit(function(){
        alert($(this["options"]).val());
        return false;
    });

//********************************************************




//SLIDES PARA COMO FUNCIONA********************************


  $("#myCarousel").carousel();

  $('#myCarousel').on('slide', '', function() {
  if($('.carousel-inner .item:last').hasClass('active')) {
    $(this).carousel('stop');
  }
});




//*********************************************************
}(window.jQuery);

