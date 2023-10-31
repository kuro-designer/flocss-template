/* Drawer */
// jQuery("#js-drawer-icon").on("click", function () {
//   jQuery("#js-drawer-icon").toggleClass("is-open");
//   jQuery("#js-drawer-content").toggleClass("is-open");
// });

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("#js-to-top-button").show();
  } else {
    jQuery("#js-to-top-button").hide();
  }
});

/* Smooth Scroll */
jQuery('a[href^="#"]').click(function () {
  var header = 0;
  var speed = 300;
  var id = jQuery(this).attr("href");
  var target = jQuery("#" == id ? "html" : id);
  var position = jQuery(target).offset().top - header;
  if (0 > position) {
    position = 0;
  }
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed
  );
  return false;
});

jQuery(window).on("scroll", function ($) {
  if (100 < jQuery(this).scrollTop()) {
    jQuery("body").addClass("is-footer-sns-fixed");
  } else {
    jQuery("body").removeClass("is-footer-sns-fixed");
  }
});


//---ヘッダーメニューボタンを押すとヘッダーメニューを表示---//
jQuery('.p-drawer__button').on('click', function() {
  jQuery('.p-drawer').toggleClass('open');
  jQuery('.p-drawer__bg').toggleClass('open');
  jQuery('.p-drawer__button-wrapper').toggleClass('open');
  jQuery('.p-drawer__button-bar1, .p-drawer__button-bar2, .p-drawer__button-bar3').toggleClass('open');
});

//---黒い背景をクリックしてもヘッダーメニューを非表示---//
jQuery('.p-drawer__bg').on('click', function() {
  jQuery('.p-drawer').removeClass('open');
  jQuery('.p-drawer__bg').removeClass('open');
  jQuery('.p-drawer__button-wrapper').removeClass('open');
  jQuery('.p-drawer__button-bar1, .p-drawer__button-bar2, .p-drawer__button-bar3').removeClass('open');
});



// スムーススクロール

// jQuery('a[href^="#"]').on('click', function() {

//   var header = jQuery('.header').innerHeight();
//   var id = jQuery(this).attr('href');
//   var position = 0;
//   if ( id != '#') {
//     position = jQuery(id).offset().top - header;
//   }

//   console.log(id);
//   console.log(position);
//   jQuery('html,body').animate({
//     scrollTop: position
//   },
//   300);
// })


// // スクロール検知
// jQuery(window).on("scroll", function() {
//   // トップから100px以上スクロールしたら
//   if (100 < jQuery(this).scrollTop()) {
//     // is-showクラスをつける
//  jQuery('.to-top').addClass( 'is-show' );
//   } else {
//     // 100pxを下回ったらis-showクラスを削除
//   jQuery('.to-top').removeClass( 'is-show' );
//   }
// });

    // wowjs
    // new WOW().init()

    // header下線
    // jQuery('.header__nav-item-link').on('click', function() {
    //   jQuery('.header__nav-item-link').removeClass('is-active');
    //   jQuery(this).addClass('is-active');
    // });
