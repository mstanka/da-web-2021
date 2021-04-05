'use strict';

const timeInputMinEl = document.querySelector('.time-input--min');
const timeInputSecEl = document.querySelector('.time-input--sec');
const btnStartEl = document.querySelector('.btn--start');
const btnResetEl = document.querySelector('.btn--reset');
const minutesEl = document.querySelector('.alarm__minutes');
const secondsEl = document.querySelector('.alarm__seconds');
const audioEl = document.querySelector('audio');
const alarmEl = document.querySelector('.alarm');

let time;
let ringing;

const countDown = () => {
  time -= 1;
  if (time > 59) {
    minutesEl.textContent = String(Math.floor(time / 60)).padStart(2, '0');
    secondsEl.textContent = String(time % 60).padStart(2, '0');
    btnStartEl.disabled = true;
  }

  if (time > 0 && time <= 59) {
    minutesEl.textContent = '00';
    secondsEl.textContent = String(time).padStart(2, '0');
    btnStartEl.disabled = true;
  }

  if (time === 0) {
    clearInterval(ringing);
    audioEl.play();
    alarmEl.classList.add('alarm--ring');
    secondsEl.textContent = '00';
    timeInputMinEl.value = '';
    timeInputSecEl.value = '';
    btnStartEl.disabled = false;
  }
};

btnStartEl.addEventListener('click', () => {
  time = Number(timeInputMinEl.value) * 60 + Number(timeInputSecEl.value);
  if (!time || time < 0) return;
  ringing = setInterval(countDown, 1000);
});

btnResetEl.addEventListener('click', () => {
  clearInterval(ringing);
  alarmEl.classList.remove('alarm--ring');
  audioEl.pause();
  secondsEl.textContent = '00';
  minutesEl.textContent = '00';
  timeInputMinEl.value = '';
  timeInputSecEl.value = '';
  btnStartEl.disabled = false;
});
