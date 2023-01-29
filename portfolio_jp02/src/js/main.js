$(function () {
  gsap.fromTo(
    ".l_header_title_txt-box01",
    {
      x: 100,
      autoAlpha: 0,
    },
    {
      delay: 2,
      x: 0,
      duration: 2,
      autoAlpha: 1,
      ease: "cubic-bezier(0,.96,.15,1.07)",
      stagger: {
        amount: 0.4,
      },
    }
  );
  gsap.fromTo(
    ".l_header_title_txt-box02",
    {
      x: -100,
      autoAlpha: 0,
    },
    {
      delay: 2,
      x: 0,
      duration: 2,
      autoAlpha: 1,
      ease: "cubic-bezier(0,.96,.15,1.07)",

      stagger: {
        amount: 0.4,
        // grid: 'auto',
        // from: 'center'
      },
    }
  );
  gsap.fromTo(
    ".l_header_title_txt",
    {
      autoAlpha: 0,
    },
    {
      delay: 3,
      duration: 2,
      autoAlpha: 1,
      ease: "cubic-bezier(0,.96,.15,1.07)",

      stagger: {
        amount: 0.4,
        // grid: 'auto',
        // from: 'center'
      },
    }
  );

  gsap.fromTo(
    ".l_grid_item",
    {
      y: 30,
      autoAlpha: 0,
    },
    {
      y: 0,
      autoAlpha: 1,
      stagger: {
        amount: 3,
        // grid: 'auto',
        // from: 'center'
      },
    }
  );



  // hamburger
  const hamberger = $(".js_hamburger");
  const navigation = $(".js_navigation");

  hamberger.on("click", function () {
    $(this).toggleClass("is_active");
    navigation.toggleClass("is_active");
    $(".js_body").toggleClass("is_active");
    $(".circle-bg").toggleClass("is_active");



    // $(".l_grid_item").toggleClass

    if ($(this).hasClass("is_active")) {
      gsap.to(".l_grid_item", {
        y: 30,
        autoAlpha: 0,
      });

      gsap.to(".l_header_title_txt-box01", {
        x: 100,
        autoAlpha: 0,
      });
      gsap.to(".l_header_title_txt-box02", {
        x: -100,
        autoAlpha: 0,
      });
    } else {
      gsap.fromTo(
        ".l_grid_item",
        {
          y: 30,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          stagger: {
            amount: 3,
            // grid: 'auto',
            // from: 'center'
          },
        }
      );

      gsap.to(".l_header_title_txt-box", {
        x: 0,
        autoAlpha: 1,
      });
    }
  });




  $.scrollify({
    section: ".scrollify", //1ページスクロールさせたいエリアクラス名
    scrollbars: "false", //スクロールバー表示・非表示設定
    interstitialSection: "#header,#footer", //ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
    easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
    scrollSpeed: 300, // スクロール時の速度
  });




  $(".js_slick_list").slick({
    infinity: true,
    centerMode:true,
    centerPadding:"10%",
    adaptiveHeight: true,
    slidesToScroll: 1,
    prevArrow: '<button class="m_slick_nav m_slick_nav__prev"></button>',
    nextArrow: '<button class="m_slick_nav m_slick_nav__next"></button>',
    dots: true,
    mobileFirst:true,
    responsive:[{
      breakpoint:768,
      settings:{
        slidesToShow:2,
      }
    },
    {
      breakpoint:1080,
      settings:{
        slidesToShow:3,
      }
    }]
  });






  $(".about_contents_item").on("click", function () {
    $(this).toggleClass("is_active_current");
    $(".about_contents_item").toggleClass("is_active");
    $(".about_contents_item_wrapper01").toggleClass("is_active");
    $(".about_contents_item-inner").toggleClass("is_active");
    $(".about_contents_item-cta").toggleClass("is_active");
  });




  gsap.fromTo(
    ".about_contents_item",
    {
      x: "-30%",
      duration: 0.5,
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".about_contents_list",
        start: "center bottom",
        end: "center top",
        // markers: true,
      },
      x: 0,
      opacity: 1,
      stagger: {
        amount: 1,
        grid: "auto",
        // from: 'center'
      },
    }
  );





  $(".input").on("click", function () {
    if ($(this).hasClass("is_active")) {
      $(".input").removeClass("is_active");
    } else {
      $(".input").removeClass("is_active");
      $(this).addClass("is_active");
    }
  });




  gsap.fromTo(
    ".about_content02-deco",
    {
      y: "-30%",
      autoAlpha: 1,
    },
    {
      delay: 2,
      y: "200%",
      duration: 2,
      autoAlpha: 1,
      repeat:-1,
    }
  );




// TextTypingというクラス名がついている子要素（span）を表示から非表示にする定義
function TextTypingAnime() {
	$('.typing').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
    var thisChild = "";
		if (scroll >= elemPos - windowHeight) {
			thisChild = $(this).children(); //spanタグを取得
			//spanタグの要素の１つ１つ処理を追加
			thisChild.each(function (i) {
				var time = 100;
				//時差で表示する為にdelayを指定しその時間後にfadeInで表示させる
				$(this).delay(time * i).fadeIn(time);
			});
		} else {
			thisChild = $(this).children();
			thisChild.each(function () {
				$(this).stop(); //delay処理を止める
				$(this).css("display", "none"); //spanタグ非表示
			});
		}
	});
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".typing");
	element.each(function () {
		var text = $(this).html();
		var textbox = "";
		text.split('').forEach(function (t) {
			if (t !== " ") {
				textbox += '<span>' + t + '</span>';
			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);

	});

	TextTypingAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


  
});
