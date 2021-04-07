'use strict';

// Stáhněte si JavaScriptový program, který obsahuje tři různé funkce na generování hesel. Každá funkce vygeneruje heslo zadané délky s určitou bezpečnostní silou. Kód funkcí zkoumat nemusíte, obsahuje věci, které jsme zatím neprobírali. Vyzkoušejte si však funkce zavolat z konzole a prohlédněte si, jaká hesla generují.

// Napište funkci createAccount, která se bude tvářit, že zakládá nový uživatelský účet. Funkce bude mít dva parametry. První bude uživatelské jméno a druhý bude funkce, pomocí které se má vygenerovat heslo pro tento účet. Funkce createAccount vrátí řetězec, který bude obsahovat jméno uživatele a heslo vygenerovaní voláním funkce obdržené jaké druhý parametr. Například
// Založen nový uživatel honza s heslem 123456
// Vyzkoušejte v konzoli založit více různých účtů s různými typy hesel.

const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};

const createAccount = (userName, generatePassword) => {
  return `Zalozen novy uzivatel ${userName} s heslem ${generatePassword(
    userName.length,
  )}`;
};

console.log(strongPassword('Honza'));
console.log(createAccount('Pepa', mediumPassword));
console.log(createAccount('Karel', strongPassword));
console.log(createAccount('Jana', weakPassword));