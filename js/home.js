/**
 * Created by Ali.Elsbaee on 7/24/2017.
 */

$(document).ready(function () {
    var askCourse = $('.home .ask-course'),
        slider = $('#slider'),
        sliderHover = slider.add($('#ask_course')),
        windowHeight = $(window).height(),
        mySwiper = new Swiper('#slider', {
            spaceBetween: 0,
            loop: true,
            // autoplay: 500,
            // speed: 500,
            initialSlide: 0,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            onInit: function (swiper) {
                // $('.video-wrapper').css('transform','translateX(0px)');
                // setTimeout(function () {
                //     $('.promo p').css('transform','translateX(0px)');
                //     $('.promo h2').css('transform','translateX(0px)');
                // }, 800);
                // setTimeout(function () {
                //     $('.promo-btn').fadeIn(300);
                // },1600);

                if ($(window).innerWidth() > 991) {
                    slider.css('height',windowHeight - 142);
                    // askCourse.css('bottom',slider.height() - 55);
                    // slider.find('.slider-btns').css('margin-top',((slider.height()/2) - 45));
                }
            },
            // onSlideChangeStart: function (swiper) {
            //     if ($(window).innerWidth() > 991) {
            //         if (swiper.realIndex === 0){
            //             askCourse.fadeIn(300);
            //         } else {
            //             askCourse.fadeOut(300);
            //         }
            //     }
            // }
        });

    // sliderHover.hover(function () {
    //     mySwiper.stopAutoplay();
    // },function () {
    //     mySwiper.startAutoplay()
    // });


    var searchInput = $('#search_input'),
        searchBtn = $('#search_btn'),
        closeSearchBtn = searchInput.find('#close_search'),
        searchForm = $('#search_form');

    searchBtn.on('click',function () {
        if (searchInput.find('input').val()) {
            searchForm.submit();
        } else {
            searchInput.toggleClass('active');
            $(this).toggleClass('active');
        }
    });

    closeSearchBtn.on('click',function () {
        searchInput.removeClass('active');
        searchBtn.removeClass('active');
    });


    var phoneCodeSelect = $('#phoneCode'),
        phoneCodes = phoneCodeSelect.find('option');

    // Get location of client
    $.get(
        "http://freegeoip.net/json/?callback",
        function (data) {
            phoneCodes.each(function () {
                if ($(this).attr('data-countryCode') === data.country_code) {
                    changePhoneCode($(this).val());
                    $(this).attr('selected','selected');
                }
            });
            changelocation(data.country_name, data.city);
        }
    );

    $('#phoneCodeOverlay').bind('click',function () {
        phoneCodeSelect.show().focus().attr('size',20)
    });

    phoneCodeSelect.click(function () {
        var $this = $(this);
        $this.attr('size','0').hide();
        changePhoneCode($this.val());
    });

    // Change phone code
    function changePhoneCode(val) {
        $('#phoneCodeOverlay').html('+ ' + val + '<i class="ion ion-arrow-down-b"></i>');
    }

    function changelocation(country, city) {
        $('#country').attr('value', country);
        $('#city').attr('value', city);
    }


    var now = new Date().getDate();
    $('#datetimepicker').datetimepicker({
        autoclose: true,
        startView: 'year',
        minView: 'month'
    });


    var testiSwiper = new Swiper('#testimonials', {
        spaceBetween: 0,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true,
        nextButton: '.button-next',
        prevButton: '.button-prev'
    });

    var partnersSwiper = new Swiper('#partners', {
        spaceBetween: 0,
        loop:true,
        nextButton: '.button-next',
        prevButton: '.button-prev',
        slidesPerView: 6,
        spaceBetween: 25,
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

    var j$ = jQuery,
        $nav = j$(".nav"),
        $underline = $nav.find(".underline"),
        $tab = $nav.find("li");

    $tab.on("click",function () {
        $underline.css({
            "width": j$(this).width(),
            "left": j$(this).position().left,
            "transform": "translateX(0)"
        });
    });




    $('#courses').slick({
        slidesToShow: 3,
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
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });


    $('#events').slick({
        slidesToShow: 3,
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
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



// Upcoming countdown
    // Set the date we're counting down to
    var countDownDate = new Date("2019/10/14 11:45 AM").getTime();
    //initialize
    startCountDown();

    function startCountDown() {
        window.timer = setInterval(function() {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var secs = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            $('#days').text(days);
            $('#hours').text(hours);
            $('#mins').text(mins);
            $('#secs').hide(0,function () {
                $(this).text(secs);
            }).fadeIn(200);
            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(timer);
                $('#days').text('0');
                $('#hours').text('0');
                $('#mins').text('0');
                $('#secs').text('0');
            }
        }, 1000);
    }

    $(window).focus(function() {
        startCountDown();
    }).blur(function() {
        clearInterval(timer);
    });

});