(function ($) {
    'use strict';
    
    $('a[href^=#]').click(function () {
        var speed       = 1000,
            href        = $(this).attr("href"),
            position    = (href === "#" ? 0 : $(href).offset().top);
        
        $("html, body").stop().animate({scrollTop: position}, speed, "swing");
        return false;
    });
         
    var nav     = $('#fixedBox'),
        offset  = nav.offset();
              
    $(window).scroll(function () {
        if ($(window).scrollTop() > 558) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    });
}(jQuery));