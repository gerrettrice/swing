$('.fade').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 350,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
});

$(document).ready(function () {
    $('#home').click(function () {
        window.location = 'index.html';
    });

    $('#about').click(function () {
        window.location = 'about.html';
    });
});
