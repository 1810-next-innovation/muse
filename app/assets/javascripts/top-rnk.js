$(function() {
    $('.local-navbar li').click(function() {

        var index = $('.local-navbar li').index($(this));
        $('.rnk-content li').css('display','none');

        $('.rnk-content li').eq(index).css('display','block').removeClass('hide');
        $('.local-navbar li').removeClass('active');
        $(this).addClass('active')
    });
});