/**
 * Created by Ali on 9/26/2017.
 */

$(document).ready(function () {
    var panels = $('.methods').find('.panel-default');
    panels.on('click',function () {
        $(this).siblings('.panel-default').find('.panel-body').slideUp();
        $(this).find('.panel-body').slideDown();
    });

    $('input[type=file]').change(function () {
        $(this).closest('form').submit();
    });
});