
/*
* 事前準備
*/
$j = jQuery;
var leadin_observer = null;
var onsubmit_email = null;

/*
* 初期化処理
*/
$j(document).ready( function(){
  start_leadin_observe();
});


/*
* 開始時に実行される処理。
* leadinが呼び出されることを検知するための処理。
*/
function start_leadin_observe() {
  // オブザーバー作成
  leadin_observer = new MutationObserver(leadin_observe);
  // セレクタをセットして監視を開始
  leadin_observer.observe(
    $j('body')[0], { //bodyにつけるのは避けたいが、Leadinは直下にくるため妥協。
      'childList': true,
    });
}

/*
* 更新待機処理
*/
function leadin_observe() {
  // ターゲットについての更新だったか確認
  // prod #leadinModal-16171
  // stg #leadinModal-385925
  if($j('#leadinModal-16171').length || $j('#leadinModal-385925').length){
    // 監視終了
    leadin_observer.disconnect();
    // ボタンへonclick処理を付与する
    //add_event_leadin_button();

    // オブザーバー作成
    leadin_observer = new MutationObserver(leadin_observe2);
    var target = $j('#leadinModal-16171')[0];
    if (!target) {
      target = $j('#leadinModal-385925')[0];
    }
    // セレクタをセットして監視を開始
    leadin_observer.observe(
      target,
        {
          'childList': true,
          'subtree' : true,

        });
    $j('.leadinModal-close').hide();
  }
}

// /*
// * ボタンへ、イベントを追加する処理
// */
// function add_event_leadin_button() {
//   // ボタンへ、onclick処理を挟む
//   $j('#leadinModal-16171').find('.leadin-button').attr('onclick', 'push_leadin_button()');
// }
//
//
//
// /*
// * leadinのボタンが押されたときに呼び出される関数
// */
// function push_leadin_button(){
//
//   // オブザーバー作成
//   leadin_observer = new MutationObserver(leadin_observe2);
//   var target = $j('#leadinModal-16171')[0];
//   // セレクタをセットして監視を開始
//   leadin_observer.observe(
//     target,
//       {
//         'childList': true,
//         'subtree' : true,
//
//       });
// }

/*
* 更新待機処理
*/
function leadin_observe2() {
  if($j('#leadin-content-form-wrapper').length){
    $j('.leadinModal-close').show();
    // 削除
    leadin_observer.disconnect();
    // ボタンにemail取得イベントを追加
    $j('#leadin-content-form-wrapper form').attr('onsubmit', 'leadin_custom_onsubmit()');

  }
}


/*
* 登録ボタンが押された時
*/
function leadin_custom_onsubmit() {
  // email取得し保存しておく
  onsubmit_email = $('#leadin-content-form-wrapper form [name=email]').val();

  // オブザーバー作成
  leadin_observer = new MutationObserver(leadin_observe3);
  var target = $j('#leadinModal-16171')[0];
  if (!target) {
    target = $j('#leadinModal-385925')[0];
  }
  // セレクタをセットして監視を開始
  leadin_observer.observe(
    target,
      {
        'childList': true,
        'subtree' : true,
      });

  return true;
}

/*
* 更新待機処理
*/
function leadin_observe3() {
  // ターゲットについての更新だったか確認
  if($j('.thank-you-message').length){
    if (onsubmit_email){
      // 監視終了
      leadin_observer.disconnect();
      // 通信開始
      user_check(onsubmit_email);
    }
  }
}


/*
* ユーザーチェック処理
*/
function user_check(email){
    //ajax送信
    $.ajax({
        type:'POST',
        url:ajaxurl.url,
        data:{
            'action'  : 'user_check', // 既存ユーザーかチェック
            'email'   : email,
        },
    })
    // 成功
    .done( (response) => {
        return true;
    })
    // 失敗
    .fail( (response) => {
        return false; // 失敗しても何もしない
    });
    return true;
}
