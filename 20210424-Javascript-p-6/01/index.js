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

// Napište cyklus, který spočítá průměr čísel v poli numbers. Napište tento cyklus ve staré formě for a v nové formě forEach.
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum / 2);

let sum2 = 0;
numbers.forEach((number) => {
  sum2 += number;
  return sum2;
});
console.log(sum2 / 2);

// Pomocí metody forEach napište cyklus, který vypíše do konzole poslední písmeno z každného jména v poli names.

names.forEach((name) => console.log(name.slice(-1)));

// Pomocí funkce forEach vypište do konzole postupně věk každé osoby z pole osoby.

osoby.forEach((osoba) => console.log(osoba.age));

// Pomocí metody some zjistěte, jestli jsou v poli numbers nějaká čísla dělitelná 11.

console.log(numbers.some((number) => number / 11));

// Pomocí metody every zjistěje, jestli v poli osoby platí, že každá osoba je vždy buď muž nebo žena.
console.log(
  osoby.every((osoba) => osoba.gender === 'female' || osoba.gender === 'male'),
);
