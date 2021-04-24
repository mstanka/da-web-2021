'use strict';

console.log('funguju!');

const app = document.querySelector('#app');

const Bulb = () => {
  for (let i = 0; i < 3; i++) {
    let element = document.createElement('div');
    element.classList.add('bulb');
    app.appendChild(element);

    element.addEventListener('click', () => {
      element.classList.toggle('bulb--on');
    });
  }
};

Bulb();
