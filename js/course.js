/**
 * Created by Ali on 9/19/2017.
 */



$(document).ready(function () {
    var sponsorsSwiper = new Swiper('#sponsors', {
        loop:true,
        nextButton: '.button-next',
        prevButton: '.button-prev',
        slidesPerView: 6,
        spaceBetween: 30,
        breakpoints: {
            // when window width is <= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            // when window width is <= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 15
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 5,
                spaceBetween: 25
            }
        }
    });

    $('#related_courses').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:'<button type="button" class="slick-prev"><i class="ion ion-chevron-left"></i></button>',
        nextArrow:'<button type="button" class="slick-next"><i class="ion ion-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});