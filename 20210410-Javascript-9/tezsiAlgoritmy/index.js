'use strict';

const numbers = [
  -24,
  -11,
  27,
  29,
  -4,
  -28,
  -21,
  -14,
  3,
  -8,
  24,
  19,
  -25,
  -2,
  -1,
  11,
  32,
  -31,
  5,
];

////// Vypište na výstup všechna čísla, která jsou větší než jejich předchůdce.
console.log('všechna čísla, která jsou větší než jejich předchůdce');

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1]) {
    console.log(numbers[i]);
  }
}

////// Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.
console.log(
  'Vypište na výstup všechny vrcholy v daném poli. Vrchol je číslo, které je větší než jeho předchůdce i jeho následovník.',
);

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > numbers[i - 1] && numbers[i] < numbers[i + 1]) {
    console.log(numbers[i]);
  }
}

////// Nejprve spočítejte průměr čísel v poli a výsledek si ulože do proměnné mean. Poté spočítejte součet druhých mocnin vzdáleností všech čísel od průměru.
console.log('součet druhých mocnin vzdáleností všech čísel od průměru');

let mean = 0;
let distance = 0;
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  mean += numbers[i];
}
mean = mean / numbers.length;

for (let i = 0; i < numbers.length; i++) {
  distance = Math.abs(numbers[i] - mean);
  sum += Math.pow(distance, 2);
}
console.log(sum);

////// Spočítejte směrodatnou odchylku čísel v poli. To provedete tak, že nejprve spočítáte takzvaný rozptyl, což je průměr druhých mocnin vzdáleností všech čísel od průměru. Rozptyl pak odmocníte pomocí funkce Math.sqrt.
console.log('smerodatna odchylka');

console.log(Number(Math.sqrt(sum / numbers.length).toFixed(2)));

////// Najděte s seznamu největší prvek.
console.log('nejvetsi prvek');

let max = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(max);

////// Najděte s seznamu největší prvek, který je menší než číslo 16.
console.log('největší prvek, který je menší než číslo 16');

let max16;
let min = numbers[0];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > min && numbers[i] < 16) {
    min = numbers[i];
    max16 = numbers[i];
  }
}
console.log(max16);
