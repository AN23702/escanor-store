// Menu main mobile
const mobileIcon = document.querySelector('.mobile-icon');
const closeMobileIcon = document.querySelector('.close-mobile-icon');
const fixMobileMenuMain = document.querySelector('.fix-mobile-menu-main');



mobileIcon.addEventListener('click', () => {
    fixMobileMenuMain.style.display = 'block';
  });
  
  closeMobileIcon.addEventListener('click', (event) => {
    fixMobileMenuMain.style.display = 'none';
    event.stopPropagation(); // Ngăn chặn sự kiện lan truyền
  });

// bottom footer
const pSubMenuFooterMobile = document.querySelector('.p-sub-menu-footer-mobile');
const subMenuFooterMobile = document.querySelector('.sub-menu-footer-mobile');

pSubMenuFooterMobile.addEventListener('click', () =>{
  if (subMenuFooterMobile.style.display === "none") {
    subMenuFooterMobile.style.display = "block";
  } else {
    subMenuFooterMobile.style.display = "none";
  }
});


const pSubMenuFooterMobile1 = document.querySelector('.p-sub-menu-footer-mobile-1');
const subMenuFooterMobile1 = document.querySelector('.sub-menu-footer-mobile-1');

pSubMenuFooterMobile1.addEventListener('click', () =>{
  if (subMenuFooterMobile1.style.display === "none") {
    subMenuFooterMobile1.style.display = "block";
  } else {
    subMenuFooterMobile1.style.display = "none";
  }
});

// Left filter mobile box
const leftFilterMobile = document.querySelector('.left-filter-mobile');
const leftFilterMobileBox = document.querySelector('.left-filter-mobile-box');
const closeLeftFilterMobileBox = document.querySelector('.close-left-filter-mobile-box');

leftFilterMobile.addEventListener('click', () => {
  if (leftFilterMobileBox.style.display === "none") {
    leftFilterMobileBox.style.display = "block";
  } else {
    leftFilterMobileBox.style.display = "none";
  }
});

closeLeftFilterMobileBox.addEventListener('click', () => {
  leftFilterMobileBox.style.display = "none"
})

// Mobile search
const mobileSearch = document.querySelector('.mobile-search');
const mobileSearchBox = document.querySelector('.mobile-search-box');
const closeMobileSearch = document.querySelector('.close-mobile-search');

mobileSearch.addEventListener('click', () => {
  if (mobileSearchBox.style.display === "none") {
    mobileSearchBox.style.display = "block";
  } else {
    mobileSearchBox.style.display = "none";
  }
});

closeMobileSearch.addEventListener('click', () => {
    mobileSearchBox.style.display = "none";
});

// right filter mobile
const rightFilterMobile = document.querySelector('.right-filter-mobile');
const rightFilterMobileBox = document.querySelector('.right-filter-mobile-box');
const closeRightFilterMobileBox = document.querySelector('.close-right-filter-mobile-box')

rightFilterMobile.addEventListener('click', () => {
  if (rightFilterMobileBox.style.display === "none") {
    rightFilterMobileBox.style.display = "block";
  } else {
    rightFilterMobileBox.style.display = "none";
  }
});

closeRightFilterMobileBox.addEventListener('click', () => {
    rightFilterMobileBox.style.display = "none";
});