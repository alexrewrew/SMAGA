$(document).ready(function () {
    "use strict";

    $('#open-number').click(function () {
        event.preventDefault();
        $(this).toggleClass('open')
        $('.menu-number-dropdown').slideToggle('fast');
    })

    $(".inline").modaal();

    $(".slider-one").slick({
        slide: "img",
        nextArrow: "<div class='arrow arrow-right'><i class='fa fa-angle-right'></i></div>",
        prevArrow: "<div class='arrow arrow-left'><i class='fa fa-angle-left'></i></div>"
    });

    $(".slider-head").slick({
        slide: "img",
        nextArrow: "<div class='arrow arrow-right'><i class='fa fa-angle-right'></i></div>",
        prevArrow: "<div class='arrow arrow-left'><i class='fa fa-angle-left'></i></div>"
    });

    $('.slider-three').on('init reInit afterChange', function (event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.slider-counter').text(i + '/' + slick.slideCount);
    });

    $(".slider-three").slick({
        slide: ".service-slider",
        nextArrow: "<div class='arrow arrow-right'><i class='fa fa-angle-right'></i></div>",
        prevArrow: "<div class='arrow arrow-left'><i class='fa fa-angle-left'></i></div>",
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });



    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            // $(".link-up").addClass("visible");
            $('nav').addClass('scroll');
        }
        else {
            // $(".link-up").removeClass("visible");
            $('nav').removeClass('scroll');
        }
    });


    $(".smooth").click(function (event) {
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top - 70;
        $("body,html").animate({
            scrollTop: top
        }, 1500);
    });


    //responsive scripts
    $(window).on('load resize', function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            $('.menu-lang').appendTo('.nav-panel');
        }

        if (window.matchMedia("(min-width: 768px)").matches) {
            $('.menu-lang').appendTo('#lang-col');
        }

    });
});


