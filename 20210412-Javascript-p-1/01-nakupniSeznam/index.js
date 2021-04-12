'use strict';

const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice'];

// Napište cyklus, který projde celé toto pole a všechny položky spojí dohromady do jednoho velkého řetězce jako níže.
// 'moukamáslocukrjablkaskořice'
let newString = '';
for (let i = 0; i < list.length; i++) {
  newString += list[i];
}
console.log(newString);

// Upravte váš program tak, že výsledný řetězec bude vypadat takto:
// 'mouka,máslo,cukr,jablka,skořice'
let newString2 = '';
for (let i = 0; i < list.length; i++) {
  newString2 += `${list[i]},`;
}
console.log(newString2.slice(0, -1));

// Upravte váš program tak, aby výsledný řětězec obsahoval HTML značky.
// '<li>mouka</li><li>máslo</li><li>cukr</li><li>jablka</li><li>skořice</li>'

let newString3 = '';
for (let i = 0; i < list.length; i++) {
  newString3 += `<li>${list[i]}</li>`;
}
console.log(newString3);

// Vytvořte někde na stránce prázdný číslovaný seznam ol a pomocí vlastnosti innerHTML do něj vložte řetězec sestavený v předchozím kroku.
const listEL = document.querySelector('.list');

for (let i = 0; i < list.length; i++) {
  listEL.innerHTML += `<li>${list[i]}</li>`;
}
