'use strict';

const messageEl = document.querySelector('.message');
const inputEl = document.querySelector('#registr');
const buttonEl = document.querySelector('.button');

buttonEl.addEventListener('click', () => {
  messageEl.textContent = `Uživatel ${inputEl.value} již existuje.`;
  buttonEl.textContent = 'Zkusit znova';
});
