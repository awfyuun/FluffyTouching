var swiper = new Swiper(".mySwiper-1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper-2", {
  effect: "cards",
  grabCursor: true,
});

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
    $('.mobile-sideBar').addClass('active'); 
    }

    function sideBar__hide() {
    $('.mobile-sideBar').removeClass('active'); 
    }


    function sideBar__init() {
    $('.btn_sideBar').click(function() {
        sideBar__show();
    });
    
    $('.clear').click(function() {
        sideBar__hide();
    });
    }

    sideBar__init();

    // Popup
    function Popup__show() {
    $('.LogIn').addClass('active'); 
    }

    function Popup__hide() {
    $('.LogIn').removeClass('active'); 
    }


    function Popup__init() {
    $('.btn_logIn').click(function() {
        Popup__show();
    });
    
    $('.clear').click(function() {
        Popup__hide();
    });
    }

    Popup__init();

    // Popup
    function Popup_2__show() {
      $('.popup-cart').addClass('active'); 
      }
  
      function Popup_2__hide() {
      $('.popup-cart').removeClass('active'); 
      }
  
  
      function Popup_2__init() {
      $('.btn_cart').click(function() {
          Popup_2__show();
      });
      
      $('.clear').click(function() {
          Popup_2__hide();
      });
      }
  
      Popup_2__init();