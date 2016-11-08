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

    /*******************************
     ******* digits  script ********
     ******************************/
    var show = true;
    var countbox = ".digits";
    $(window).on("scroll load resize", function() {

        if (!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if (w_top + w_height * 0.8 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

            var space_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

            $('#our-years').animateNumber(
                {
                    number: 6,
                    numberStep: space_separator_number_step
                }, 1000
            );

            $('#our-logisticians').animateNumber(
                {
                    number: 26,
                    numberStep: space_separator_number_step
                }, 1300
            );

            $('#our-clients').animateNumber(
                {
                    number: 248,
                    numberStep: space_separator_number_step
                }, 2000
            );

            $('#our-offices').animateNumber(
                {
                    number: 8,
                    numberStep: space_separator_number_step
                }, 1000
            );

            show = false;
        }
    });

});

