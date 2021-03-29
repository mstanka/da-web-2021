'use strict';

////////////////////////////////////////////
// Doplňte do stránky JavaScriptový program, který pomocí funkce prompt požádá uživatele aby vyjářil svoji úroveň postupně ve všech zobrazených dovednostech jako číslo 0 - 100. Program pak nastaví posuvníky na stránce na odpovídající délku a hodnoty u posuvníků na uživatelem zadaná čísla.

// Na samém začátku vašeho programu vytvořte funkci updateSkill, která bere dva vstupy: textový řetězec představující id elementu a číslo mezi 0 - 100. Tato funkce při zavolání nastaví posuvník se zadaným id na správnou hodnotu. Použijte tuto funkci ve vašem kódu, abyste nemuseli při nastavování posuvníků psát třikrát po sobě téměř stejný kód.
///////////////////////////////////////////

const updateSkill = (id, num) => {
  id.querySelector('.skill__progress').style.width = `${num}%`;
  id.querySelector('.skill__value').textContent = `${num} / 100`;
};

const htmlResponse = prompt(
  'Zadej stupen dovednosti HTML (jako cislo 0 - 100): ',
).trim();
const cssResponse = prompt(
  'Zadej stupen dovednosti CSS (jako cislo 0 - 100): ',
).trim();
const jsResponse = prompt(
  'Zadej stupen dovednosti JavaScript (jako cislo 0 - 100): ',
).trim();

updateSkill(document.querySelector('#skill1'), htmlResponse);
updateSkill(document.querySelector('#skill2'), cssResponse);
updateSkill(document.querySelector('#skill3'), jsResponse);

///////////////////////
// document.querySelector(
//   '#skill1 .skill__progress',
// ).style.width = `${htmlResponse}%`;
// document.querySelector(
//   '#skill1 .skill__value',
// ).innerText = `${htmlResponse} / 100`;

// document.querySelector(
//   '#skill2 .skill__progress',
// ).style.width = `${cssResponse}%`;
// document.querySelector(
//   '#skill2 .skill__value',
// ).innerText = `${cssResponse} / 100`;

// document.querySelector(
//   '#skill3 .skill__progress',
// ).style.width = `${jsResponse}%`;
// document.querySelector(
//   '#skill3 .skill__value',
// ).innerText = `${jsResponse} / 100`;
