'use strict';

const weekdays = [
  'pondělí',
  'úterý',
  'středa',
  'čtvrtek',
  'pátek',
  'sobota',
  'neděle',
];
const months = [
  {
    name: 'leden',
    days: 31,
  },
  {
    name: 'únor',
    days: 28,
  },
  {
    name: 'březen',
    days: 31,
  },
  {
    name: 'duben',
    days: 30,
  },
  {
    name: 'květen',
    days: 31,
  },
  {
    name: 'červen',
    days: 30,
  },
  {
    name: 'červenec',
    days: 31,
  },
  {
    name: 'srpen',
    days: 31,
  },
  {
    name: 'září',
    days: 30,
  },
  {
    name: 'říjen',
    days: 31,
  },
  {
    name: 'listopad',
    days: 30,
  },
  {
    name: 'prosinec',
    days: 31,
  },
];

// Z pole weekdays vyrobte pole obsahující všechny názvy dnů napsané VELKÝMI PÍSMENY.
const weekdaysInCapital = weekdays.map((weekday) => weekday.toUpperCase());
console.log(weekdaysInCapital);

// Z pole weekdays vyrobte pole obsahující pouze první dvě písmena každého dne, tedy ['po', 'út', 'st' /* atd. */];

const weekdaysTwoLetters = weekdays.map((weekday) => weekday.slice(0, 2));
console.log(weekdaysTwoLetters);

// Z pole months vyrobte pole obsahující pouze počty dní v každém měsíci.
const daysInMonth = months.map((month) => month.days);
console.log(daysInMonth);

// Z pole months vyrobte pole obsahující pro každý měsíc datum jeho prvního dne v roce 2020, tedy ['1. leden 2020', '1. únor 2020' /* atd. */];
const date = months.map((month) => `1. ${month.name} 2020`);
console.log(date);
