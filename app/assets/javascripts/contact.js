$(function () {

  $('.change_Panel').hide();
  $('.change_Panel').eq(0).show();
  $('.change_tab').eq(0).addClass('is-active');

  $('.change_tab').each(function () {
    $(this).on('click', function () {
      var index = $('.change_tab').index(this);
      $('.change_tab').removeClass('is-active');
      $(this).addClass('is-active');
      $('.change_panel').hide();
      $('.change_panel').eq(index).show();
    });
  });
});