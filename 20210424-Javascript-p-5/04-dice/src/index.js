import './style.css';
import Dice from './Dice/index';
import { roll } from './helpers';

console.log('funguju!');

const diceRow = document.querySelector('#dice-row');

const createDices = () => {
  for (let i = 0; i < 4; i++) {
    diceRow.appendChild(Dice(roll()));
  }
};

window.addEventListener('load', createDices);
