'use strict';

import { roll } from '../helpers';

const Dice = ({ side }) => {
  const dice = document.createElement('div');
  dice.classList.add('dice');

  const diceSide = document.createElement('div');
  diceSide.className = `dice__side dice__side--${side}`;

  const button = document.createElement('button');
  button.className = 'btn btn--small roll-btn';
  button.textContent = 'hazej'

  dice.appendChild(diceSide);
  dice.appendChild(button);

  button.addEventListener('click', () => {
    diceSide.className = `dice__side dice__side--${roll()}`;
  });

  return dice;
};

export default Dice;
