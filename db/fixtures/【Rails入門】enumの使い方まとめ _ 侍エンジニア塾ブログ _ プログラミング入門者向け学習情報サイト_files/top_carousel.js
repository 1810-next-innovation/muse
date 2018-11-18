$(function() {
  var $items = $('.center-item');
  if ($items.find('li').length <= 1) {
    return;
  }
  $items.slick({
    arrows: true,
    infinite: true,
    dots: true,
    slidesToShow: 1,
    centerMode: true, //要素を中央寄せ
    centerPadding: '100px', //両サイドの見えている部分のサイズ
    autoplay: true, //自動再生
    responsive: [{
      breakpoint: 1024,
      settings: {
        centerMode: false
      }
    }]
  });
  $('[data-js=slider]').css('display', 'block');
});
