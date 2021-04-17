'use strict';

// Dalším užitečným endpointem API pro svátky je /namedays. Ten nám umožňuje zjistit, kdo má svátek v přesně určený den. Tento endpoint má tři povinné parametry: country, month a day. Takto například zjistíme, kdo má v Česku svátek 13. února.

// https://api.abalin.net/namedays?country=cz&month=2&day=13
// Vytvořte aplikaci, které bude obsahovat dvě textová políčka a tlačítko. Uživatel do políček zadá číslo dne a číslo měsíce a po stisknutí tlačítka se mu na stránce zobrazí, kdo má tento den svátek.

const formEl = document.querySelector('form')
const dayEl = document.querySelector('.day');
const monthEl = document.querySelector('.month');
const svatekEl = document.querySelector('.svatek-dany-den');

formEl.addEventListener('submit', (e) => {
  e.preventDefault();

  let month = monthEl.value;
  let day = dayEl.value;

  fetch(`https://api.abalin.net/namedays?country=cz&month=${month}&day=${day}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.data);
      svatekEl.textContent = data.data.namedays.cz;
    });
});

