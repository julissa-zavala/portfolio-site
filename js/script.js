$(document).ready(function () {
  const mq = window.matchMedia("(min-width: 991px)");

  $(window).on("load", function () {
    preloaderFadeOutTime = 500;
    var preloader = $('.spinner-wrapper');
    preloader.animate({
      up: '40px',
      opacity: 0
    }, preloaderFadeOutTime);
    preloader.css("visibility", "hidden");
    AOS.init();
  });

  $(".highlight-link").each(function () {
    if ($(this).isOnScreenHighlight()) {
      $(this).addClass('shown');
    } else {
      $(this).removeClass('shown');
    }
  });

  var jumboHeight = $('.jumbotron').outerHeight();

  $(window).scroll(function () {
    $(".scroll-disappear").css("opacity", 1 - $(window).scrollTop() / 500);
    $(".arrow").css("opacity", 1 - $(window).scrollTop() / 20);
    $(".highlight").each(function () {
      if ($(this).isOnScreenHighlight()) {
        $(this).addClass('shown');
      } else {
        $(this).removeClass('shown');
      }
    });
    $(".highlight-link").each(function () {
      if ($(this).isOnScreenHighlight()) {
        $(this).css("animation-delay", "0s");
        $(this).addClass('shown');
      } else {
        $(this).removeClass('shown');
      }
    });
  });
  $('body').scrollspy({
    target: '.bs-docs-sidebar',
    offset: 160
  });
  $('#template-to-top').hide();
  $(".bs-docs-sidebar").hide();

  function checkVisible(elm) {
    var rect = elm.getBoundingClientRect();
    var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
  }

  var allLargeImgs = document.getElementsByClassName('full-screen-img');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#template-to-top').fadeIn();
    } else {
      $('#template-to-top').fadeOut();
    }

    if ($(this).scrollTop() > 600) {

      var hasLargeImg = false;

      Array.prototype.forEach.call(allLargeImgs, function (el) {
        if (checkVisible(el)) {
          hasLargeImg = true;
        }
      });

      if (hasLargeImg) {
        $(".bs-docs-sidebar").fadeOut('slow');
      } else {
        $(".bs-docs-sidebar").fadeIn('slow');
      }
    } else {
      $(".bs-docs-sidebar").fadeOut("slow");
    }
  });

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 700, 'swing', function () {
      window.location.hash = target;
    });
  });

  $('#template-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 600);
    return false;
  });

  $(".p-center-wrapper button[data-toggle='collapse']").click(function () {
    $(this).text(function (i, old) {
      var newString = "";
      if (old.startsWith("See")) {
        newString = old.replace("See", "Hide");
      } else if (old.startsWith("Hide")) {
        newString = old.replace("Hide", "See");
      } else {
        newString = old;
      }
      return newString;
    });
  })
});

$.fn.isOnScreenHighlight = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();
  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.bottom));
};
