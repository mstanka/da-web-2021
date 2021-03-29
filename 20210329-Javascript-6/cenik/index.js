'use strict';

// Napište funkci selectPlan s jedním parametrem planNumber. Tento parametr bude představovat číslo plánu. Funkce podle čísla plánu vybere ze stránky správný DOM element a přídá k němu CSS třídu plan--selected. Vyzkoušejte vaši funkci v konzoli s různými čísly.
// Opakovaným voláním funkce selectPlan lze na stránce postupně vybrat všechny plány. My bychom však chtěli, aby mohl být vybrát vždy nejvýš jeden. Upravte funkci selectPlan tak, že vybere plán zadaný v parametru a u ostatních plánů výběr zruší. Ke zrušení výběru stačí z příslušného prvku odebrat třídu plan--selected.

const selectPlan = (planNumber) => {
  document.querySelector('.plan').classList.remove('plan--selected');
  document.getElementById(`plan${planNumber}`).classList.add('plan--selected');
};

selectPlan(2);
