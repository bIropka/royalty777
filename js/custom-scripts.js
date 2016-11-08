$(document).ready(function () {

    /******************************
     ******* init scripts
     ******************************/

    if ($(window).width() < '992'){

    } else {

    }

    $(window).resize(function(){
        if ($(window).width() < '992'){

        } else {
            
        }
    });

    /******************************
     ******* clicks
     ******************************/

    $('.burger').click(function () {
        $(this).siblings('ul').slideToggle();
    });
    

    /*******************************
     ******* slider scripts ********
     ******************************/

    $('.slider-winner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.slider-winner-controls',
        prevArrow: '.slider-winner-left',
        nextArrow: '.slider-winner-right',
        autoplay: true,
        autoplaySpeed: 5000
    });

    $('.slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: '.slider-banner-controls',
        prevArrow: '.slider-banner-left',
        nextArrow: '.slider-banner-right',
        autoplay: true,
        autoplaySpeed: 6000
    });

});

