'use strict';

//////////////////////////////////
////////////// 7-pocitani hodin
// Napište cyklus WHILE, který do konzole postupně vypíše všechny časové údaje v rámci jednoho dne od 0:00 až po 23:59.

// 0:59
// 1:59
// 2:59

let hour = 0;

while (hour < 24) {
  let min = 0;
  while (min < 60) {
    console.log(
      `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}`,
    );
    min++;
  }
  hour++;
}
