'use strict';

console.log('funguju!');

// Stáhněte si základ stránky, která zobrazuje obyčejnou žárovku.

// Pomocí JavaScriptu zařiďte, aby se při stisknutí libovolné klávesy na stránce přidala k elementu žárovky CSS třída bulb--on. Žárovka by se takto měla rozsvítit.
// Vylepšete program tak, aby na následné stisknutí libovolné klávesy žárovka opět zhasnula. Opakovaným mačkávním kláves ji tak můžeme rozsvěcovat a zhasínat.

const bulbEl = document.querySelector('.bulb');

const handleBulb = () => {
  bulbEl.classList.toggle('bulb--on');
};

document.addEventListener('keyup', handleBulb);
