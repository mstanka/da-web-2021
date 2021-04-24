'use strict';

const numbers = [15, 6, 70, 41, 33, 27, 8, 16, 98, 60, 56];
const names = ['Petr', 'Jana', 'Pavel', 'Zuzana', 'Eva', 'Adam', 'Onyx'];
const osoby = [
  { name: 'Petr', age: 16, gender: 'male' },
  { name: 'Jana', age: 8, gender: 'female' },
  { name: 'Pavel', age: 34, gender: 'male' },
  { name: 'Zuzana', age: 41, gender: 'female' },
  { name: 'Eva', age: 13, gender: 'female' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Adam', age: 22, gender: 'male' },
  { name: 'Onyx', age: 37, gender: 'intersex' },
];

// Pomocí metody filter získejte z pole numbers pouze ta čísla, která jsou sudá.

const sudaCisla = numbers.filter((number) => number % 2 === 0);
console.log(sudaCisla);

// Pomocí metody filter získejte z pole names pouze ta jména, která jsou delší než 4 znaky.
const longNames = names.filter((name) => name.length > 4);
console.log(longNames);

// Pomocí metody filter získejte z pole osoby pouze dospělé lidi.
const adults = osoby.filter((osoba) => osoba.age > 18);
console.log(adults);

// Pomocí metody filter získejte z pole osoby pouze dospělé muže.
const adultMale = osoby.filter(
  (osoba) => osoba.age > 18 && osoba.gender === 'male',
);
console.log(adultMale);

// Pomocí metody map vydělte všecha čísla v poli numbers třemi.
const delTrema = numbers.map((number) => (number / 3).toFixed(2));
console.log(delTrema);

// Pomocí metody map převeďte všechna čísla v poli numbers na řetězce.
const numbersToString = numbers.map((number) => number.toString());
console.log(numbersToString);

// Pomocí metody map vytvořte pole, ve kterém budou všechna jména z pole names zabalená do li tagu. Jméno Petr tak dopadne jako <li>Petr</li>.
const newNames = names.map((name) => `<li> ${name}</li>`);
console.log(newNames);

// Použijte pole osoby a pomocí metody map vytvořte pro každou osobu email ve formátu petr@gmail.com.
const email = osoby.map((osoba) => `${osoba.name.toLowerCase()}@gmail.com`);
console.log(email);
