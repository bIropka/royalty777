$(document).ready(function () {

    /******************************
     ******* init scripts
     ******************************/
    
    setTimeout(function() {
        $('.slider-wrapper').animate({opacity: 1}, 500);
    }, 500);

    if ($(window).width() > '1000'){
        $('nav ul').css('display', 'block');
    } else {
        $('nav ul').css('display', 'none');
    }
    if ($(window).width() > '800') {
        $('.account-info').css('display', 'block');
    } else {
        $('.account-info').css('display', 'none');
        $('.account-mobile').find('i').toggleClass('fa-arrow-up fa-arrow-down');

    }

    $(window).resize(function(){
        if ($(window).width() > '1000'){
            $('nav ul').css('display', 'block');
        } else {
            $('nav ul').css('display', 'none');
        }
        if ($(window).width() > '800') {
            $('.account-info').css('display', 'block');
        } else {
            $('.account-info').css('display', 'none');
            $('.account-mobile').find('i').toggleClass('fa-arrow-up fa-arrow-down');
        }
    });

    /******************************
     ******* clicks
     ******************************/

    $('.burger').click(function () {
        $(this).siblings('ul').slideToggle(200);
    });

    $('.account-mobile').click(function () {
        $(this).find('i').toggleClass('fa-arrow-up fa-arrow-down');
        $(this).siblings('.account-info').slideToggle(200);
    });
    

    /*******************************
     ******* slider scripts 
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
     ******* custom select
     ******************************/

    $('.current-value').click(function() {

        $(this).siblings('i').toggleClass('fa-chevron-up fa-chevron-down');
        $(this).parents('.custom-select').toggleClass('active');
        $(this).siblings('ul').stop().fadeToggle(0);

    });

    $('.payment').click(function() {

        var newClassNames = $(this).attr('class');
        var newPayment = $(this).html();

        $(this).parent().siblings('.current-value').html(newPayment);
        $(this).parent().siblings('.current-value').removeClass().addClass('current-value').addClass(newClassNames);

        $(this).parents('.custom-select').find('input').attr('value', newPayment);

        $(this).parent().siblings('i').toggleClass('fa-chevron-up fa-chevron-down');
        $(this).parents('.custom-select').removeClass('active');
        $(this).parents('ul').stop().fadeOut(0);

    });

    /*******************************
     ******* modals
     ******************************/

    $('.sign-in').click(function () {
        $('.window-sign-in').fadeIn();
        if ($(window).width() < '801') {
            $('.account-info').css('display', 'none');
            $('.account-mobile').find('i').toggleClass('fa-arrow-up fa-arrow-down');
        }
    });

    $('.forget-password').click(function () {
        $('.window-forget-password').fadeIn();
        $('.window-sign-in').fadeOut();
    });

    $('.sign-up').click(function () {
        $('.window-sign-up').fadeIn();
        if ($(window).width() < '801') {
            $('.account-info').css('display', 'none');
            $('.account-mobile').find('i').toggleClass('fa-arrow-up fa-arrow-down');
        }
    });

    $('.withdraw-money').click(function () {
        $('.window-withdraw').fadeIn();
        if ($(window).width() < '801') {
            $('.account-info').css('display', 'none');
            $('.account-mobile').find('i').toggleClass('fa-arrow-up fa-arrow-down');
        }
    });



    $('.window').click(function (event) {
        $target = $(event.target);
        if (!$target.closest($('form')).length) $('.window').fadeOut();
        if ($target.hasClass('close-window')) $('.window').fadeOut();
    });


});

