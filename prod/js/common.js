$(document).ready(function () {

  //parralax
  const image1 = document.querySelector('#parallax-1');
  const image2 = document.querySelector('#parallax-2');
  const image3 = document.querySelector('#parallax-3');
  const image5 = document.querySelector('#parallax-5');

  new simpleParallax(image1, {
    overflow: true,
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  new simpleParallax(image2, {
    overflow: true,
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  new simpleParallax(image3, {
    overflow: true,
    delay: 1,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  new simpleParallax(image5, {
    overflow: true,
    delay: .6,
    transition: 'cubic-bezier(0,0,0,1)'
  });

  //анимация пр прокрутке
  const controller = new ScrollMagic.Controller();
  TweenLite.defaultEase = Linear.easeNone;

  const arrElemsJackpots = Array.from($('.jackpots__elem.elem-w-icon')).reverse();
  const arrElemsWhy = Array.from($('.why__elem.elem-w-icon')).reverse();

  const tween1 = TweenMax.staggerFrom(".features__elem.elem-w-icon", 1.5, {
    opacity: 0,
    x: 400,
    ease: Power3.easeInOut
  }, 0.08)

  const tween2 = TweenMax.staggerFrom(arrElemsJackpots, 1.5, {
    opacity: 0,
    x: -400,
    ease: Power3.easeInOut
  }, 0.2)

  const tween3 = TweenMax.staggerFrom(arrElemsWhy, 1.5, {
    opacity: 0,
    x: -400,
    ease: Power3.easeInOut
  }, 0.2)

  const tween4 = TweenMax.staggerFrom(".ultimate__elem.elem-w-icon", 1.5, {
    opacity: 0,
    x: -400,
    ease: Power3.easeInOut
  }, 0.08)

  const tween5 = TweenMax.staggerFrom('.question', 1.5, {
    opacity: 0,
    y: 300,
    ease: Power3.easeInOut
  }, 0.2)

  const scene = new ScrollMagic.Scene({
    triggerElement: ".features",
    reverse: false,
    triggerHook: 0.4
  })
    .addIndicators({
      name: "Box Timeline",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black"
    })
    .setTween(tween1)
    .addTo(controller);

  const scene2 = new ScrollMagic.Scene({
    triggerElement: ".jackpots",
    reverse: false,
    triggerHook: 0.4
  })
    .addIndicators({
      name: "Box Timeline",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black"
    })
    .setTween(tween2)
    .addTo(controller);

  const scene3 = new ScrollMagic.Scene({
    triggerElement: ".why",
    reverse: false,
    triggerHook: 0.3
  })
    .addIndicators({
      name: "Box Timeline",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black"
    })
    .setTween(tween3)
    .addTo(controller);

  const scene4 = new ScrollMagic.Scene({
    triggerElement: ".ultimate",
    reverse: false,
    triggerHook: 0.3
  })
    .addIndicators({
      name: "Box Timeline",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black"
    })
    .setTween(tween4)
    .addTo(controller);

  const scene5 = new ScrollMagic.Scene({
    triggerElement: ".questions",
    reverse: false,
    triggerHook: 0.3
  })
    .addIndicators({
      name: "Box Timeline",
      colorTrigger: "black",
      colorStart: "black",
      colorEnd: "black"
    })
    .setTween(tween5)
    .addTo(controller);

  $('.reviews__slider').slick({
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    prevArrow: $('.reviews__arrow--left'),
    nextArrow: $('.reviews__arrow--right'),
  });

  //раскрывающиеся вопросы
  $('.question').click(function (e) {
    if($('.question').hasClass('active')) {
      if($(this).hasClass('active')) {
        $('.question.active').find('p').slideUp();
        $('.question.active').removeClass('active')
      } else {
        $('.question.active').find('p').slideUp();
        $('.question.active').removeClass('active')
        $(this).addClass('active');
        $(this).find('p').slideDown();
      }
    } else {
      $(this).addClass('active');
      $(this).find('p').slideDown();
    }  
  })
});
