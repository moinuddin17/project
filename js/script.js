//Header js
$(document).click(function () {
    if ($(".navbar-collapse").hasClass("show")) {
        $('.navbar-collapse').collapse('hide');
    }
    $('.menu').removeClass('active');
  });
  $(window).scroll(function () {
    var sticky = $(".sticky"),
      scroll = $(window).scrollTop();
    if (scroll >= 100) sticky.addClass("fixed");
    else sticky.removeClass("fixed");
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });
  
  $(".scroll-top").click(function () {
    $("html, body").animate({
      scrollTop: 0,
    },
      "slow"
    );
    return false;
  });