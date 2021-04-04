'use strict';

const timeInputEl = document.querySelector('.time-input');
const btnEl = document.querySelector('button');
const secondsEl = document.querySelector('.alarm__seconds');
const audioEl = document.querySelector('audio');
const alarmEl = document.querySelector('.alarm');

let time;
let ringing;

const countDown = () => {
  time -= 1;
  secondsEl.textContent = String(time).padStart(2, '0');

  if (time === 0) {
    clearInterval(ringing);
    audioEl.play();
    alarmEl.classList.add('alarm--ring');
    timeInputEl.value = '';
  }
};

btnEl.addEventListener('click', () => {
  time = Number(timeInputEl.value);
  ringing = setInterval(countDown, 1000);
});
