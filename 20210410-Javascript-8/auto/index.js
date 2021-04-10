'use strict';

const carEl = document.querySelector('.car');
let margin = 0;

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowRight') {
    margin += 10;
    carEl.style.marginLeft = `${margin}px`;
  }
  if (e.code === 'ArrowLeft') {
    margin -= 10;
    carEl.style.marginLeft = `${margin}px`;
  }
});
