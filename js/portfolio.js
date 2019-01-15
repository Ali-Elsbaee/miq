/**
 * Created by Ali.Elsbaee on 10/17/2017.
 */

$(function () {
    var galleries = $('.project-gallery'),
        numberOfSlides = galleries.find('.original-gallery > .swiper-slide').length;

    galleries.each(function () {
        $(this).find('.non-original-gallery').html($(this).find('.original-gallery').html());

        var galleryTop = new Swiper($(this).find('.gallery-top'), {
            nextButton: '.button-next',
            prevButton: '.button-prev',
            spaceBetween: 10,
            effect: 'fade',
            lazyLoading: true,
            loop: true,
            loopedSlides: numberOfSlides
        });

        var galleryThumbs = new Swiper($(this).find('.gallery-thumbs'), {
            spaceBetween: 10,
            centeredSlides: true,
            slidesPerView: 'auto',
            touchRatio: 0.2,
            slideToClickedSlide: true,
            loop: true,
            loopedSlides: numberOfSlides
        });

        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;
    });

});