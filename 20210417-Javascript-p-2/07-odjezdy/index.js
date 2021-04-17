'use strict';

const departures = [
  {
    time: { hrs: 8, mins: 14 },
    train: 'Acela Express',
    no: 2153,
    to: 'Washington, DC',
    status: '',
    track: 2,
  },
  {
    time: { hrs: 8, mins: 19 },
    train: 'New Haven Line',
    no: 1541,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
  },
  {
    time: { hrs: 8, mins: 20 },
    train: 'Shore Line East',
    no: 1606,
    to: 'Old Saybrook',
    status: 'On Time',
    track: 12,
  },
  {
    time: { hrs: 8, mins: 37 },
    train: 'N.E. Regional',
    no: 190,
    to: 'Boston South Station',
    status: 'On Time',
    track: 1,
  },
  {
    time: { hrs: 8, mins: 40 },
    train: 'Shuttle',
    no: 490,
    to: 'Springfield',
    status: 'On Time',
    track: 3,
  },
  {
    time: { hrs: 8, mins: 43 },
    train: 'N.E. Regional',
    no: 96,
    to: 'Newport News',
    status: 'On Time',
    track: 2,
  },
  {
    time: { hrs: 8, mins: 50 },
    train: 'New Haven Line',
    no: 1545,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 8,
  },
  {
    time: { hrs: 9, mins: 16 },
    train: 'Shore Line East',
    no: 1610,
    to: 'Old Saybrook',
    status: 'On Time',
    track: 10,
  },
  {
    time: { hrs: 9, mins: 23 },
    train: 'New Haven Line',
    no: 1549,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
  },
  {
    time: { hrs: 9, mins: 36 },
    train: 'Acela Express',
    no: 2150,
    to: 'Boston-South Sta.',
    status: '',
    track: 1,
  },
  {
    time: { hrs: 9, mins: 46 },
    train: 'New Haven Line',
    no: 1551,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 8,
  },
  {
    time: { hrs: 10, mins: 13 },
    train: 'N.E. Regional',
    no: 170,
    to: 'Boston South Station',
    status: 'On Time',
    track: 2,
  },
  {
    time: { hrs: 10, mins: 25 },
    train: 'New Haven Line',
    no: 1553,
    to: 'Grand Central Terminal',
    status: 'On Time',
    track: 14,
  },
];

// Vytvořte komponentu Departure, která jako svůj vstup dostane objekt představující odjezd vlaku, a vrátí HTML jednoho řádku odjezdové tabulky.
// Smažte obsah elementu tbody v index.html. Pomocí cyklu projděte pole departures a pomocí vaší komponenty vytvořte na stránce řádek tabulky pro každý objekt odjezdu. Výsledná stránka tak bude přehledně zobrazovat tabulku všech odjezdů.

const tbodyEL = document.querySelector('tbody');

const Departure = ({ time, train, no, to, status, track }) => {
  return `
  <tr>
    <td class="board__time">${time.hrs}:${time.mins}</td>
    <td class="board__train">${train}</td>
    <td class="board__no">${no}</td>
    <td class="board__to">${to}</td>
    <td class="board__status">${status}</td>
    <td class="board__track">${track}</td>
  </tr>
`;
};

for (let i = 0; i < departures.length; i++) {
  tbodyEL.innerHTML += Departure(departures[i]);
}
