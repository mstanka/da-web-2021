'use strict';

// Využijte funkci setTimeout ke splnění následujících úkolů.

// Zařiďte, aby minutka začala zvonit za pět vteřin po otevření stránky. Zvonění zařídíte tak, že k elementu budíku přídáte CSS třídu alarm--ring.
// Nechte uživatele skrze prompt zadat kolik vteřin má uplynout než minutka začne zvonit.
// Můžete zařídit i spuštění zvuku. Stačí ze stránky vybrat audio element a zavolat na něm metodu play. Abyste zvuk slyšeli, musíte po zadání času na stránku kliknout. Prohlíč Chrome totiž brání stránkam přehrávat audio či video dokud uživatel se stránkou nějak neinteragoval.
// Přidejte na stránku tlačítko, které umožní odpočet minutky zrušit dřív, než začne zvonit.

const audioEl = document.querySelector('audio');
const alarmEl = document.querySelector('.alarm');
const btnEl = document.querySelector('.btn');
let numOfSecond = 5000;
numOfSecond = 1000 * prompt('Zadej počet sekund, než začne minutka zvonit: ');
let ringing;

const handleAlarm = () => {
  alarmEl.classList.add('alarm--ring');
  audioEl.play();
};

btnEl.addEventListener('click', () => {
  clearTimeout(ringing);
  btnEl.textContent = 'Zvonění zrušeno';
  alarmEl.classList.remove('alarm--ring');
  audioEl.pause();
});

window.addEventListener('load', () => {
  ringing = setTimeout(handleAlarm, numOfSecond);
});

///////////////////////////////
// const cas  = Number(prompt('Zadej cas: '));
// const cudlik = document.querySelector('.btn-alarm');

// let timerId = null;
// cudlik.addEventListener('click', () => {
//   clearTimeout(timerId);
//   timerId = null;
// })

// setTimeout(() => {
//   document.querySelector('.alarm').classList.add('alarm--ringing');
//   document.querySelector('audio').play();
// }, 5000);
