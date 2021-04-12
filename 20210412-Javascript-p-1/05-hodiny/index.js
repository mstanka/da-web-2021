'use strict';

// Vytvořte komponentu Clock, která bude na vstupu očekávat takovýto objekt:
// {
//   hours: 12,
//   minutes: 34,
// }
// Komponenta nechť z takového objektu vytvoří HTML pro jedny hodiny. Jak má vypadat HTML hodin najdete v souboru index.html.
// HTML kód hodin ze stránky vyjměte a nechte v ní pouze element app.
// Ve vašem programu vyberte element app a pomocí komponenty Clock do něj zapojte hodiny zobrazující nějaký čas.
// Zkuste pomocí funkce Clock vložit do stránky několik různých hodin pod sebe.
// Zkuste vyrobit pole hodin a zobrazit je pomocí cyklu na stránce.

const currentTime = {
  hours: 12,
  minutes: 34,
};

const worldTime = [
  {
    hours: 12,
    minutes: 34,
  },
  {
    hours: 7,
    minutes: 34,
  },
  {
    hours: 4,
    minutes: 34,
  },
  {
    hours: 1,
    minutes: 34,
  },
  {
    hours: 0,
    minutes: 34,
  },
];

const Clock = (props) => {
  return `
    <div class="clock">
      <span class="clock__hours">${props.hours}</span>:<span class="clock__minutes"
      >${props.minutes}</span>
    </div>
  `;
};

const appEl = document.querySelector('#app');
appEl.innerHTML = Clock(currentTime);

for (let i = 0; i < worldTime.length; i++) {
  appEl.innerHTML += Clock(worldTime[i]);
}
