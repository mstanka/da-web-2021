'use strict';

import { roll } from '../helpers';

const changeHTML = (element, props) => {
  element.innerHTML = `
    <div class="dice__side dice__side--${props}"></div>
    <button class="btn btn--small roll-btn">hodit</button>
  `;
};

const changeDice = (element) => {
  let newSide = roll();
  changeHTML(element, newSide);
};

const Dice = (props) => {
  const element = document.createElement('div');
  element.classList.add('dice');
  changeHTML(element, props);

  const btnEl = element.querySelector('.roll-btn');
  btnEl.addEventListener('click', () => changeDice(element));

  return element;
};

export default Dice;
