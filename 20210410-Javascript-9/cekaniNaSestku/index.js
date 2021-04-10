'use strict';

/////////////////////////////////
////////////// 6-cekani na sestku
// Napište funkci roll, která simuluje hod kostkou. Vrátí tedy náhodné číslo od 1 do 6 tak, že všechna čísla mají stejnou pravděpodobnost.
// Váš program nechť hází kostkou tak dlouho, až poprvé padne šestka. Vypište na výstup na kolikátý pokus šestka padla.
// Spusťte váš program desetkrát za sebou a zaznamenejte výsledky. Sdílejte vaše výsledky s ostatními abychom nasbírali co nejvíce dat.

for (let i = 0; i < 10; i++) {
  let numSix = 0;
  let numRolls = 0;

  const roll = () => {
    numSix = Math.floor(Math.random() * 6) + 1;
    numRolls++;
    return numSix;
  };

  while (numSix !== 6) {
    roll();
  }

  console.log(`Při ${i + 1}. kole házení: počet pokusů: ${numRolls}`);

  const messageEl = `
  <p class="message">Při ${i + 1}. kole házení: počet pokusů: ${numRolls}</p>
  `;

  document.querySelector('.roll').insertAdjacentHTML('beforeEnd', messageEl);
}
