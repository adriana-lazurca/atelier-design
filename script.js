const sliderTexts = [
   'Connectée et intelligente, permettant un suivi à distance',
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
];
let sliderIndex = 0;
const slider = document.querySelector('.slider-text');
const pagination = document.querySelector('.pagination');

document.addEventListener('DOMContentLoaded', onLoad);
document.addEventListener('unload', onLeave);

document.querySelector('.next-btn').addEventListener('click', showNextText);
document.querySelector('.previous-btn').addEventListener('click', showPreviousText);

function onLoad() {
   toggleMenu();
   setSliderText();
   setPagination();
   addEventHandlers();
}

function onLeave() {
   removeEventHandlers();
}

function addEventHandlers() {
   window.addEventListener('resize', toggleMenu);
}

function removeEventHandlers() {
   window.removeEventListener('resize', toggleMenu);
}

function setSliderText() {
   slider.textContent = sliderTexts[sliderIndex];
}

function setPagination() {
   pagination.textContent = sliderIndex + 1 + '/' + sliderTexts.length;
}

function showNextText() {
   const lastIndex = sliderTexts.length - 1;

   if (sliderIndex < lastIndex) {
      sliderIndex += 1;

      setSliderText();
      setPagination();
   }
}

function showPreviousText() {
   if (sliderIndex > 0) {
      sliderIndex -= 1;

      setSliderText();
      setPagination();
   }
}

// MENU
const menuButtons = document.querySelectorAll('.menu-btn');
const menuModal = document.querySelector('.menu-modal');

menuButtons.forEach((button) => button.addEventListener('click', toggleModal));

function toggleModal() {
   menuModal.classList.toggle('active');

   menuButtons.forEach((button) => {
      button.classList.toggle('active');
   });
}

//MENU
const screenWidth = window.innerWidth;
const menuMobile = document.querySelector('.menu-mobile');
const menuLaptop = document.querySelector('.menu-laptop');

function toggleMenu() {
   if (window.innerWidth <= 700) {
      showMobileMenu();
      hideLaptopMenu();
      return;
   }

   showLaptopMenu();
   hideMobileMenu();
}

function showMobileMenu() {
   if (!menuMobile.classList.contains('active')) {
      menuMobile.classList.add('active');
   }
}

function showLaptopMenu() {
   if (!menuLaptop.classList.contains('active')) {
      menuLaptop.classList.add('active');
   }
}

function hideLaptopMenu() {
   if (menuLaptop.classList.contains('active')) {
      menuLaptop.classList.remove('active');
   }
}

function hideMobileMenu() {
   if (menuMobile.classList.contains('active')) {
      menuMobile.classList.remove('active');
   }
}
