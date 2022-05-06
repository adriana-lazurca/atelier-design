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
document.querySelector('.next-btn').addEventListener('click', showNextText);
document.querySelector('.previous-btn').addEventListener('click', showPreviousText);

function onLoad() {
   setSliderText();
   setPagination();
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
