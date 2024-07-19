const API_URL = "https://2c8n4v-3000.csb.app/products";

// Phan trang
const itemsPerPage = 8;
let currentPage = 1;
let totalPages = 0;



// call api
const getApi = async(url) => {
    let response = await axios.get(url); //response: bien tra ve, tat ca api

    let apiSaleProduct = response.data.filter(products => products.sale === "y");
    showSaleProducts(apiSaleProduct);

    let apiShirtProduct = response.data.filter(products => products.classify === "shirt");
    showShirtProducts(apiShirtProduct);

    let apiTrousersProduct = response.data.filter(products => products.classify === "trousers");
    showTrousersProducts(apiTrousersProduct);

    let apiAccessoriesProduct = response.data.filter(products => products.classify === "accessories");
    showAccessoriesProducts(apiAccessoriesProduct);

}
getApi(API_URL);

// show sale products to html
let rowJsSaleProducts = document.querySelector(".row-js-sale-products");


const showSaleProducts = (dataSaleProducts) =>{
    let HTML =``;
    dataSaleProducts.forEach(value =>{
      HTML += `
                <div class="item">
              <div class="products-card">

                  <a href="./detail-product.html">
                      <div class="products-img">
                          <img src="${value.img}" alt="sale-products-1">
                      </div>
                  </a>
                  <div class="products-detail">
                      <h3 class="products-name">${value.name}</h3>
                      <div class="products-price">
                          <p class="new-price">${value.price}</p>
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

    rowJsSaleProducts.innerHTML = HTML;
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

}

// show shirt products to html
let rowJsShirtProducts = document.querySelector(".row-js-shirt-products");

const showShirtProducts = (dataShirtProducts) =>{
    let HTML =``;
    dataShirtProducts.forEach(value =>{
      HTML += `
                          <div class="col-6 col-sm-3 col-md-3">
                        <div class="products-card">
                            <div class="products-img">
                                <img src="${value.img}" alt="shirt-product-1">
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
    rowJsShirtProducts.innerHTML = HTML;
}


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

// show accessories products to html
let rowJsAccessoriesProducts = document.querySelector(".row-js-accessories-products")

const showAccessoriesProducts = (dataAccessoriesProducts) => {
    let HTML =``;
    dataAccessoriesProducts.forEach(value =>{
        HTML += `
                              <div class="col-6 col-sm-3 col-md-3">
                        <div class="products-card">
                            <div class="products-img">
                                <img src="${value.img}" alt="accessories-products-1">
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
    rowJsAccessoriesProducts.innerHTML = HTML;
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
// $('.sale-products-banner').owlCarousel({
//   loop:true,
//   dots:false,
//   autoplay: true,
//   autoplayTimeout: 3000,
//   margin:10,
//   nav:false,
//   responsive:{
//       0:{
//           items:2
//       },
//       600:{
//           items:2
//       },
//       1000:{
//           items:4
//       },
//       1500:{
//         items:4
//     }
//   }
// })

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

