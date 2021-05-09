'use strict'

// ternarni operator
// 1
const password = prompt('Zadejte heslo:');
// let valid = null;
// if (password.length > 8) {
//   valid = 'Heslo je v pořádku';
// } else {
//   valid = 'Heslo není bezpečné';
// }

password.length > 8 ? 'Heslo je v pořádku' : 'Heslo není bezpečné';

// 2
const grade = prompt('Počet bodů z písemky:');
// let passed = null;
// if (grade >= 50) {
//   passed = '<span>prošel</span>';
// } else {
//   passed = '<span class="red">neprošel</span>';
// }

grade >= 50 ? '<span>prošel</span>' : '<span class="red">neprošel</span>';