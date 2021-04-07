'use strict';

console.log('it works');

/////////////////////////////////////
//////////////// 3 - objednavka

const btnEl = document.querySelector('#btn-order');

// const handleBtn = () => {
//   btnEl.textContent = 'Objednáno';
// };

/////// Pozměňte program tak, že text se nevypíše do konzole, ale zobrazí se na samotném tlačítku.
// btnEl.addEventListener('click', handleBtn);

/////// Pozměňte program tak, že akce objednání se vykoná při kliknutí kamkoliv na stránku, nikoliv pouze na tlačítko.
// document.addEventListener('click', handleBtn);

/////////////////////////////////////
/////////////// 4 - kontrola dostupnosti
// Vyjděte z řešení předchozího příkladu, kdy se objednává při kliknutí na tlačítko.

// Zařiďte, aby při načtení stránky tlačítko obsahovalo zprávu Kontroluji dostupnost…
// Přidejte do stránky zpoždění pomocí funkce setTimeout, která zařídí, že 8 vteřin po načtení stránky se zpráva na tlačítku změní na Objednat.
// Tlačítka mají speciální HTML atribut s názvem disabled. Pokud je tento atribut přítomen, na tlačítko se nedá kliknout. Přidejte tento atribut do HTML kódu tlačítka, aby tlačítko bylo při načtení stránky nedostupné. Až po uplynutí časovače jej zpřístupněte nastavením vlastnosti disabled na false.

btnEl.textContent = 'Kontroluji dostupnost…';

document.addEventListener(
  'load',
  setTimeout(() => {
    btnEl.textContent = 'Objednat';
    btnEl.disabled = false;
  }, 8000),
);
