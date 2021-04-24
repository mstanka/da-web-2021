import './style.css';
import Dice from './Dice/index';

console.log('funguju!');

const diceRow = document.querySelector('#dice-row');

diceRow.appendChild(Dice({ side: 4 }));
diceRow.appendChild(Dice({ side: 6 }));
