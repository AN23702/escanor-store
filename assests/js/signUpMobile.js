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