import Quote from './Quote/index.js';
import './style.css';

const quote = {
  text: 'Try to understand the wind. No the laughter.',
  author: 'Unknown',
};

document.querySelector('#app').innerHTML = Quote(quote);
