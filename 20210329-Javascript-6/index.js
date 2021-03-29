'use strict';

///////////////////////////
///////////////pozdravy
const goodbye = () => {
  console.log('Nashledanou');
};
goodbye();

const goodbye2 = (greetName) => {
  console.log(`S pozdravem ${greetName}`);
};
goodbye2('Pavel Ovesny');

////////////////////////
/////////////////prevod meny
const convertToCZK = (amount, currency) => {
  if (currency === 'EUR') return (amount * 27.015).toFixed();
  if (currency === 'GBP') return (amount * 29.615).toFixed();
  if (currency === 'USD') return (amount * 23.197).toFixed();
  return null;
};
console.log(convertToCZK(25, 'EUR'));

//////////////////////////////////
///////////////////vyplata
const salary = (wage, hours, days) => {
  return (wage * hours * days).toFixed();
};

const taxed = (amount, percent) => {
  return amount - (amount * percent) / 100;
};

console.log(`Mesicni mzda ${salary(100, 8, 21)} korun.`);
console.log(`Mzda po zdaneni ${taxed(salary(100, 8, 21), 15)} korun.`);

///////////////////////////////////
////////////////////////kalkulacka
const calc = (num1, op, num2) => {
  if (op === '+') return num1 + num2;
  if (op === '*') return num1 * num2;
  if (op === '/') return num1 / num2;
  return null;
};

console.log(calc(2, '+', 3));
console.log(calc(3, '*', 7));
console.log(calc(10, '/', 4));

////////////////////////////////
/////////////////vyplnorez
// Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkci je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
// Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
// Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
// Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
const fillcut = (str, len) => {
  if (len < 0) return;
  if (len === str.length) return str;
  if (len > str.length) return str.padStart(len, '.');
  if (len < str.length) return str.substring(0, str.length - 1);
};

console.log(fillcut('petr', 8)); // '....petr'
console.log(fillcut('petr', 3)); // 'pet'
console.log(fillcut('petr', 4)); // 'petr'