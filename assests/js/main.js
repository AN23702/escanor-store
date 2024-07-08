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

// Sale products
$('#sale .owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:4
      },
      1000:{
          items:4
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
// let currentEffect = 'fadeInRight'

const openChat = document.getElementById('openChat');
const closeChat = document.getElementById('closeChat');

let isChatOpen = false;

chatButton.addEventListener('click', function() {
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

    // if (isChatOpen) {
    //     chatBox.style.animation = 'fadeInRight .3s ease-in-out';
    //   } else {
    //     chatBox.style.animation = 'fadeOutRight .3s ease-in-out';
    //   }

    chatBox.classList.toggle('show');

});



