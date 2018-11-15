$(function () {
  $('.Modal_sing_up').on('click',function(){
  	$('.modalArea').fadeIn();
  });
  $('.Modal_sing_in').on('click',function(){
  	$('.modalArea').fadeIn();
  });
  $('.closeModal , #modalBg').on('click',function(){
  	$('#modalArea').fadeOut();
   });
});