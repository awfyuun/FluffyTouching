// catrgory-swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// SideBar
function sideBar__show() {
  $(".mobile-sideBar").addClass("active");
  $("html, body").css("overflow", "hidden");
}

function sideBar__hide() {
  $(".mobile-sideBar").removeClass("active");
  $("html, body").css("overflow", "visible");
}

function sideBar__init() {
  $(".btn_sideBar").click(function () {
    sideBar__show();
  });

  $(".clear").click(function () {
    sideBar__hide();
  });
}

sideBar__init();
