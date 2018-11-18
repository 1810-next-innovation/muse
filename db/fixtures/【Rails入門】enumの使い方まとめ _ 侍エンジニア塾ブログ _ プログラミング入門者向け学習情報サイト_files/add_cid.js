'use strict';

document.addEventListener('DOMContentLoaded', function () {
  main();
});

function main() {
  var bTopSbNinki = document.querySelectorAll('#vce_posts_widget-2 a');
  addCID(bTopSbNinki, 'btop_sb_ninki');

  var bTopMainInterview = document.querySelectorAll('#vce_posts_widget-3 a');
  addCID(bTopMainInterview, 'btop_main_interview');

  var bTopMainCul = document.querySelectorAll('#vce_posts_widget-3-3 a');
  addCID(bTopMainCul, 'btop_main_cul');

  var bTopMainNinki = document.querySelectorAll('#main-box-3 a');
  addCID(bTopMainNinki, 'btop_main_ninki');
}

function addCID(aTags, cid) {
  Array.prototype.forEach.call(aTags, function (aTag) {
    aTag.setAttribute('href', aTag.getAttribute('href') + '?cid=' + cid);
  });
}


// 以下コンパイル前ES6コード

// document.addEventListener('DOMContentLoaded', () => {
//   main()
// })

// function main() {
//   const bTopSbNinki = document.querySelectorAll('#vce_posts_widget-2 a')
//   addCID(bTopSbNinki, 'btop_sb_ninki')

//   const bTopMainInterview = document.querySelectorAll('#vce_posts_widget-3 a')
//   addCID(bTopMainInterview, 'btop_main_interview')

//   const bTopMainCul = document.querySelectorAll('#vce_posts_widget-3-3 a')
//   addCID(bTopMainCul, 'btop_main_cul')

//   const bTopMainNinki = document.querySelectorAll('#main-box-3 a')
//   addCID(bTopMainNinki, 'btop_main_ninki')
// }

// function addCID(aTags, cid) {
//   Array.prototype.forEach.call(aTags, aTag => {
//     aTag.setAttribute('href', `${aTag.getAttribute('href')}?cid=${cid}`)
//   })
// }
