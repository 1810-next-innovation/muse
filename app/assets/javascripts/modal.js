$(function () {
  $('#modal-sign-up').on('click',function(){
  	$('#open-sign-up').fadeIn();
  });
  $('#modal-sign-in').on('click',function(){
  	$('#open-sign-in').fadeIn();
  });
  $('#modal-label').on('click',function(){
  	$('#open-label').fadeIn();
  });
  $('.closemodal , #modalbg').on('click',function(){
  	$('.modalarea').fadeOut();
   });
});
