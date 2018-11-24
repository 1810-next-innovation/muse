$(function() {
    $('.tab li').click(function() {

        var index = $('.tab li').index($(this));
        $('.content li').css('display','none');

        $('.content li').eq(index).css('display','block').removeClass('hide');
        $('.tab li').removeClass('select');
        $(this).addClass('select')
    });
});
