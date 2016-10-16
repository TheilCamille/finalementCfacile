$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 600) {
        $('.deco2').addClass('fixed');
    } else {
        $('.deco2').removeClass('fixed');
    }
});