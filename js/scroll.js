$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 0) {
        $('.navbar').fadeIn();
        $('.navbar a').fadeIn();
    } else {
        $('.navbar').fadeOut();
        $('.navbar a').fadeOut();
    }

});