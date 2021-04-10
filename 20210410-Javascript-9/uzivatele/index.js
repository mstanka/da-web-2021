'use strict';

/////////////////////////////
//////////////5-Uzivatele
// Pomocí cyklu FOR vypište všechna tato jména do konzole.
// Do konzole vypište všechna jména jako emailové adresy z domény gmail.com. Uživatel ‘paja’ tak bude ‘paja@gmail.com’.
// Vypište do konzole emaily pouze těch uživatelů, jejichž jméno má nejvýše 4 znaky.

const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'misa'];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
  console.log(users[i] + '@gmail.com');
  if (users[i].length > 4) {
    console.log(users[i]);
  }
}
