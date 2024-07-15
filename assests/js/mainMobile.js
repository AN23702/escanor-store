// Menu main mobile
const mobileIcon = document.querySelector('.mobile-icon');
const closeMobileIcon = document.querySelector('.close-mobile-icon');
const fixMobileMenuMain = document.querySelector('.fix-mobile-menu-main');


// mobileIcon.addEventListener('click', () => {
//   fixMobileMenuMain.style.display = ('block')
// });

// closeMobileIcon.addEventListener('click', () => {
//   fixMobileMenuMain.style.display = ('none')
// });

mobileIcon.addEventListener('click', () => {
    fixMobileMenuMain.style.display = 'block';
  });
  
  closeMobileIcon.addEventListener('click', (event) => {
    fixMobileMenuMain.style.display = 'none';
    event.stopPropagation(); // Ngăn chặn sự kiện lan truyền
  });