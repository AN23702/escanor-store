// Logo
$('.owl-carousel').owlCarousel({
    loop:true,
    // margin:15,
    nav:false,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

/* Nut quay lai dau trang */
window.onscroll = function() {
    if (window.pageYOffset > 0) {
      document.querySelector('.back-to-header').style.right = '20px';
    } else {
      document.querySelector('.back-to-header').style.right = '-9999999px';
    }
  };