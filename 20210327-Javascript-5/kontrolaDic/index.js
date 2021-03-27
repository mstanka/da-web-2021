'use strict';

const isDIC = (inputStr) => {
  console.log(`Length ${inputStr.length}`);

  if (inputStr.length < 11) return false;
  if (inputStr.length > 12) return false;

  const prefix = inputStr.slice(0, 2);
  console.log(`Prefix ${prefix}`);
  if (prefix !== 'CZ') return false;

  const digits = inputStr.slice(2);
  console.log(`Digits ${digits}`);
  if (!validator.isInt(digits)) return false;

  return console.log(true);
};

isDIC('CZ222333222');


// Všimněte si, že knihovna validator.js v době vzniku tohoto zadání neumí ověřit platnost českého DIČ (daňové identifikační číslo). Zkusme tedy takovou funkci napsat.

// Formát DIČ sestává z předpony CZ a poté následuje devět nebo deset číslic. Tedy například

// CZ123456789
// CZ1234567890
// Postupujte dle následujících kroků.

// Vytvořte prázdnou stránku s JavaScriptem a knihovnou validator.js.
// Vytvořte funkci isDIC s jedním parametrem inputStr, což bude řetězec, který chceme zkontrolovat.
// Jako první ve funkci zkontrolujte, jestli je vstupní řetězce kratší než 11 znaků. V takovém případě namá smysl dál nic dělat, protože vstup evidentně není DIČ. Vraťte tady z funkce false. Tím naše funkce končí. Všimněte si, že takto používáme vzor “časný návrat”.
// Dále ve funkci zkontrolujte, jestli je vstupní řetězce delší než 12 znaků. V takovém případě opět vraťte false.
// Dále ve funkce si do proměnné prefix uložte první dva znaky vstupního řetězce.
// Pomocí podmínky zkontrolujte, že proměnná prefix obsahuje přesně znaky CZ. Pokud ne, ihned vraťte false.
// Do promměné digits si uložte část vstupního řetězce od třetího znaku dále.
// Použijte metodu validator.isInt, která umí zkontrolovat, zda řetězec obsahuje pouze číslice. Pokud metoda vrátí false, ihned také vraťte false.
// Pokud funkce dospěla až do tohoto bodu, vstup prošel všemi testy. Můžeme vrátit true.
// Vyzoušejte svoji funkci v konzoli na různých vstupech a ověřte, že funguje.
