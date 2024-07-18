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