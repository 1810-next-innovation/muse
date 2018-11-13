$(function () {
  $('.tab li').click(function() {
    var index = $('.tab li').index(this);
    $('.active').removeClass('active');
    $('.tabContent .change_panel').eq(index).addClass('active');
    $('.tab li').eq(index).addClass('active');
  });
});