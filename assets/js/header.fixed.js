(function ($) {
    'use strict';
    $('a[href^=#]').click(function () {
        var speed       = 1000,
            href        = $(this).attr("href"),
            $header     = $('#top-head'),
            position    = (href === "#" ? 0 : $(href).offset().top);
        
//        console.log($header.height());
        
        $("html, body").stop().animate({scrollTop: position - 56}, speed, "swing");
        return false;
    });
    
    $(function () {
        var $header = $('#top-head');
        // nav fixed
        $(window).scroll(function () {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // nav toggle button
        $('#nav-toggle').click(function () {
            $header.toggleClass('open');
        });
        $('.nav-item').click(function () {
            $header.removeClass('open');
        });
    });
    
}(jQuery));