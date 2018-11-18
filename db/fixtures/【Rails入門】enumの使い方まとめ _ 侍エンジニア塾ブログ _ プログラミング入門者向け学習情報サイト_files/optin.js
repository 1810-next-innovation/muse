$j = jQuery;

function uaSend(id, value){
  var script = document.createElement('script');
  script.src = "https://script.google.com/macros/s/AKfycbwSoTZcj_Hx9aBpBLAhNaQwmjtyLJfygT5K4sZbBBCWCi9hDZ4/exec?id="+id+"&value="+value+"&data="+window.navigator.userAgent.toLowerCase();
  document.body.appendChild(script);
}
$j(document).ready( function(){
  // メルマガ登録ボタンを押したUser情報を送信
  /*var page = location.href.split("/blog/")[1];
  $j(document).on('click touchend', ".mc4wp-form input[type=submit]", function () {
    uaSend('mf_'+page, $j(this).parent().parent().find("input[type=email]")[0].value);
  });*/
});
