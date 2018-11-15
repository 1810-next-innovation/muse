$('.in img:gt(0)').hide();
setInterval(function() {
    $('.in :first-child').fadeOut().next('img').fadeIn().end().appendTo('.in');
}, 4300);