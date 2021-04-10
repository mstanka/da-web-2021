'use strict';

/////////////////////////////////
//////////// 6-Pohyby na účtu
// Založte JavaScriptový program s následujícím s záznamem vkladů a výběrů na nějakém bankovním účtu.

// Napište cyklus FOR, který spočítá výsledný zůstatek na účtu za předpokladu, že na účtu byla na začátku nula.
// Napište cyklus WHILE, který zjistí číslo pohybu, ve kterém se účet dostal poprvé do mínusu. Vypište jak číslo pohybu, tak výši záporného zůstatku.

const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300];

// let sum = 0;
// for (let i = 0; i < amounts.length; i++) {
//   sum = sum + amounts[i];
// }
// console.log(sum);

let sum = amounts[0];
let i = 1;

while (sum > 0) {
  sum = sum + amounts[i];
  if (sum < 0) {
    console.log(i + 1, amounts[i]);
  }
  i++;
}
console.log(sum);
