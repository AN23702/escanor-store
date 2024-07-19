const API_URL = "https://2c8n4v-3000.csb.app/products";

// call api
const getApi = async(url) => {
    let response = await axios.get(url); //response: bien tra ve, tat ca api


    let apiTrousersProduct = response.data.filter(products => products.classify === "trousers");
    showTrousersProducts(apiTrousersProduct);


}
getApi(API_URL);




// show trousers products to html
let rowJsTrousersProducts = document.querySelector(".row-js-trousers-products");

const showTrousersProducts = (dataTrousersProducts) => {
    let HTML =``;
    dataTrousersProducts.forEach(value =>{
        HTML += `
                            <div class="col-6 col-sm-3 col-md-3">
                        <div class="products-card">
                            <div class="products-img">
                                <img src="${value.img}" alt="trousers-products-1">
                            </div>

                            <div class="products-detail">
                                <h3 class="products-name">${value.name}</h3>
                                <div class="products-price">
                                    <p class="price">${value.price}</p>
                                    <p class="old-price"><del>${value.oldprice}</del></p>
                                </div>
                            </div>

                            <div class="quickview-detailview">
                                <a href="##" class="quickview">
                                    <i class="fa-solid fa-cart-plus"></i>
                                    <p>Mua ngay</p>
                                </a>
                                <a href="##" class="detailview">
                                    <i class="fa-solid fa-eye"></i>
                                    <p>Xem chi tiết</p>
                                </a>
                            </div>

                        </div>
                    </div>
        `
    });
    rowJsTrousersProducts.innerHTML = HTML;
}


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