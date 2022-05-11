document.addEventListener('DOMContentLoaded', onLoad);
document.addEventListener('unload', onLeave);

function onLoad() {
   addEventHandlers();

   displayResponsiveMenu();
   displayResponsiveFond();

   setSlider();
   displayCheckElement();
}

function onLeave() {
   removeEventHandlers();
}

function onResize() {
   displayResponsiveMenu();
   displayResponsiveFond();
   displayCheckElement();
}

function addEventHandlers() {
   window.addEventListener('resize', onResize);
}

function removeEventHandlers() {
   window.removeEventListener('resize', onResize);
}

const screenWidth = window.innerWidth;

function showElement(element) {
   if (!element.classList.contains('active')) {
      element.classList.add('active');
   }
}
function hideElement(element) {
   if (element.classList.contains('active')) {
      element.classList.remove('active');
   }
}

/************** Slider *****************/
const sliderTexts = [
   'Connectée et intelligente, permettant un suivi à distance',
   'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
   'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
];
let sliderIndex = 0;
const slider = document.querySelector('.slider-text');
const pagination = document.querySelector('.pagination');

function setSliderText() {
   slider.textContent = sliderTexts[sliderIndex];
}

function setPagination() {
   pagination.textContent = sliderIndex + 1 + '/' + sliderTexts.length;
}

function setSlider() {
   setSliderText();
   setPagination();
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

document.querySelector('.next-btn').addEventListener('click', showNextText);
document.querySelector('.previous-btn').addEventListener('click', showPreviousText);

/************** Modal display logic *****************/
const menuButtons = document.querySelectorAll('.menu-btn');
const menuModal = document.querySelector('.menu-modal');

menuButtons.forEach((button) => button.addEventListener('click', toggleModal));

function toggleModal() {
   menuModal.classList.toggle('active');

   menuButtons.forEach((button) => {
      button.classList.toggle('active');
   });
}

/************** Menu display logic *****************/

const menuMobile = document.querySelector('.menu-mobile');
const menuLaptop = document.querySelector('.menu-laptop');

function displayResponsiveMenu() {
   if (window.innerWidth <= 700) {
      showElement(menuMobile);
      hideElement(menuLaptop);
      return;
   }
   showElement(menuLaptop);
   hideElement(menuMobile);
}

/************** Fond display logic *****************/
const fondMobile = document.querySelector('.fond-mobile');
const fondLaptop = document.querySelector('.fond-laptop');

function displayResponsiveFond() {
   if (window.innerWidth <= 700) {
      showElement(fondMobile);
      hideElement(fondLaptop);

      return;
   }
   showElement(fondLaptop);
   hideElement(fondMobile);
}

/************** Check element display logic *****************/
const checkElement = document.querySelector('.check-element');

function displayCheckElement() {
   if (window.innerWidth > 700) {
      showElement(checkElement);

      return;
   }

   hideElement(checkElement);
}

