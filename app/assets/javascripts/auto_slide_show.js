$(function(){ //読み込む宣言

$('.in img:gt(0)').hide(); //最初の画像以外を非表示にする

setInterval(function() {
    $('.in :first-child').fadeOut().next('img').fadeIn().end().appendTo('.in');
}, 4600);

// フェードインとアウトを繰り返す
// setinterval:タイマー処理 一定時間ごとに特定の処理を繰り返す
});