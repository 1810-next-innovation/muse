$(function() {
  $('.tab-menu div').click(function() {
    var index = $('.tab-menu div').index(this);
    $('.tab-menu div').removeClass('active');
    $(this).addClass('active');
    $('.tab-contents li').removeClass('show').eq(index).addClass('show');
  });
});
