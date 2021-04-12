'use strict';

/////////////////////////////////////
////////////////////9-male algoritmy

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

////// Vypište na výstup všechna čísla.
console.log('-------vsechna cisla');
console.log(numbers);

/////// Vypište na výstup druhé mocniny všech čísel.
console.log('-------druhe mocniny vsech cisel');
for (let i = 0; i < numbers.length; i++) {
  // Math.pow(numbers[i], 2) - druha mocnina
  console.log(numbers[i] * numbers[i]);
}

/////// Vypište na výstup pouze záporná čísla.
console.log('-------pouze zaporna cisla');
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) console.log(numbers[i]);
}

/////// Vypište na výstup absolutní hodnotu všech čísel.
console.log('-------absolutni hodnota vsech cisel');
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) console.log(-numbers[i]);  // Math.abs()
  else console.log(numbers[i]);
}

/////// Vypište na výstup pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
console.log('-------pouze cisla, jejichz absolutni hodnota je delitelna tremi');
const numbersAbs = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) numbersAbs.push(-numbers[i]);
  else numbersAbs.push(numbers[i]);
}
for (let i = 0; i < numbersAbs.length; i++) {
  if (numbersAbs[i] % 3 === 0) console.log(numbersAbs[i]);
}

///// Vypište na výstup pouze sudá čísla.
console.log('-------pouze sude cisla');
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) console.log(numbers[i]);
}

///// Vypište na výstup jak daleko je každé číslo v seznamu od čísla 5.
console.log('-------jak daleko je každé číslo v seznamu od čísla 5');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] - 5);
}

///// Vypište na výstup druhé mocnicny vzdáleností všech čísel od čísla 5.
console.log('-------druhé mocnicny vzdáleností všech čísel od čísla 5');
for (let i = 0; i < numbers.length; i++) {
  console.log(Math.pow((numbers[i] - 5), 2));
}

///// Spočítejte, kolik je v seznamu záporných čísel.
console.log('-------kolik je v seznamu záporných čísel');
let negativeNum = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) negativeNum++;
}
console.log(negativeNum);

///// Spočítejte součet všech čísel v poli.
console.log('-------součet všech čísel v poli');
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

///// Spočítejte průměr všech čísel v poli.
console.log('-------průměr všech čísel v poli');
let sum2 = 0;
for (let i = 0; i < numbers.length; i++) {
  sum2 += numbers[i];
}
console.log(sum2 / numbers.length);

///// Spočítejte součet všech pozitivních čísel v poli.
console.log('-------součet všech pozitivních čísel v poli');
let sumPositive = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) sumPositive += numbers[i];
}
console.log(sumPositive);
