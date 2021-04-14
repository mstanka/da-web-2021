'use strict';

// Vytvořte funkci s názvem shoppingList, která na vstupu obdrží pole řetězců, představující nákupní seznam. Funkce vrátí řetězec obsahující prvky tohoto seznamu zabalené do HTML značek li.
// Upravte výsledek předchozího cvičení tak, že obsah číslovaného seznamu vytvoříte voláním funkce shoppingList.

const shoppingList = (data) => {
  let sumList = '';
  for (let i = 0; i < data.length; i++) {
    sumList += `<li>${data[i]}</li>`;
  }
  return sumList;
};

document.querySelector('.ol-list').innerHTML = shoppingList([
  'špagety',
  'kečup',
  'sýr',
]);
