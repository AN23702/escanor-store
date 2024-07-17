// Logo
$('.logo-banner').owlCarousel({
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


// Banner
$('.fix-banner').owlCarousel({
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

// Sale products
$('.sale-products-banner').owlCarousel({
  loop:true,
  dots:false,
  autoplay: true,
  autoplayTimeout: 3000,
  margin:10,
  nav:false,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:2
      },
      1000:{
          items:4
      },
      1500:{
        items:4
    }
  }
})

/* Title products sale */
var textWrapper = document.querySelector('.title-sale-products .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.title-sale-products .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.title-sale-products .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.title-sale-products',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

// Header main
const headerMain = document.querySelector(".header-main")

window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    headerMain.classList.add('scroll-menu');
  } else {
    headerMain.classList.remove('scroll-menu');
  }
});

/* Nut quay lai dau trang */
window.onscroll = function() {
    if (window.pageYOffset > 0) {
      document.querySelector('.back-to-header').style.right = '20px';
    } else {
      document.querySelector('.back-to-header').style.right = '-9999999px';
    }
  };

//   Nut chat
const chatButton = document.querySelector('.chat-button');
const chatBox = document.querySelector('.chat-box');

const openChat = document.getElementById('openChat');
const closeChat = document.getElementById('closeChat');

let isChatOpen = false;

openChat.addEventListener('click', function() {
  isChatOpen = !isChatOpen;

  if (isChatOpen) {
    openChat.style.display = 'none';
    closeChat.style.display = 'block';
    chatBox.style.animation = 'fadeInRight .3s ease-in-out';
  } else {
    openChat.style.display = 'block';
    closeChat.style.display = 'none';
    chatBox.style.animation = 'fadeOutRight .3s ease-in-out';
  }

  chatBox.classList.toggle('show');
});

closeChat.addEventListener('click', function() {
  isChatOpen = !isChatOpen;

  if (isChatOpen) {
    openChat.style.display = 'none';
    closeChat.style.display = 'block';
    chatBox.style.animation = 'fadeInRight .3s ease-in-out';
  } else {
    openChat.style.display = 'block';
    closeChat.style.display = 'none';
    chatBox.style.animation = 'fadeOutRight .3s ease-in-out';
  }

  chatBox.classList.toggle('show');
});

// Cart box
const cartButton = document.querySelector('.cart');
const closeCartButton = document.querySelector('.close-cart-box');
const cartBox = document.querySelector('.cart-box');

cartButton.addEventListener('click', () => {
    cartBox.style.display = ('block');
    cartBox.style.animation = ('fadeInRight .3s ease-in-out')
});

closeCartButton.addEventListener('click', () => {
    cartBox.style.display = ('none');
    cartBox.style.animation = ('fadeOutRight .3s ease-in-out')
});

