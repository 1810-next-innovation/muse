$(function () {
	$('.slider').slick({
  dots: true,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1
});

// dots:　スライダー下部のドットを表示するかどうか
// infinite : ループを無限にさせるかどうか
// slidesToShow : スライドを一度に表示する枚数
// slidesToScroll : スライドを一度にスクロールする数

// 無限ループで一度に3枚表示、一つ進むごとに1枚分スライドが移動するという指定