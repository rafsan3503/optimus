"user strict";

$(document).ready(function () {
  //menu header bar
  $(".header-bar").on("click", function (e) {
    $(".main-menu, .header-bar").toggleClass("active");
  });
  $(".main-menu li a").on("click", function (e) {
    $(".main-menu, .header-bar").removeClass("active");
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(300, "swing");
    } else {
      element.addClass("open");
      element.children("ul").slideDown(300, "swing");
      element.siblings("li").children("ul").slideUp(300, "swing");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp(300, "swing");
    }
  });
  //menu header bar

  //owl carousel
  $(".player__wrap").owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 2500,
    autoplayTimeout: 3000,
    autoplay: false,
    nav: false,
    dots: false,
    responsiveClass: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      767: {
        items: 2,
      },
      991: {
        items: 2,
      },
      1199: {
        items: 3,
      },
      1399: {
        items: 3,
      },
    },
  });

  //Magnifiq pupup
  $(".picture-btn").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $(".play-btn").magnificPopup({
    type: "iframe",
    callbacks: {},
  });
  //Magnifiq pupup

  // password hide
  $(
    ".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5"
  ).click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("id"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  //menu top fixed bar
  var fixed_top = $(".header-section");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 220) {
      fixed_top.addClass("menu-fixed animated fadeInDown");
      fixed_top.removeClass("slideInUp");
      $("body").addClass("body-padding");
    } else {
      fixed_top.removeClass("menu-fixed fadeInDown");
      fixed_top.addClass("slideInUp");
      $("body").removeClass("body-padding");
    }
  });
  //menu top fixed bar

  //preloader
  setTimeout(function () {
    $(".preloader").fadeToggle();
  }, 1600);
  //preloader

  //--Nice Select--//
  $("select").niceSelect();
});
