'use strict';

/////////////////////////////////
////////////// 10-Registrace
// Stáhněte se připravenou stránku s registračním formulářem pro nového uživatele. Doplňte do stránky JavaScriptový kód tak, aby byly splněny následující požadavky.

// Pokud uživatel zadá uživatelské jméno, které je již obsaženo v poli users, vypište do prvku s třídou reg-form__error chybovou hlášku ve smyslu, že zadané uživatelské jméno je již zabráno.
// Zkontrolujte, že heslo zadané do prvního políčka je dostatečně bezpečené. Heslo považujeme za bezpečné, pokud má alespoň 10 znaků nebo obsahuje alespoň jeden ze znaků pomlčka -, podtržítko _ nebo dvojtečka :.

const users = [
  'petr',
  'jana-34',
  'husky16',
  '66beruska',
  'thegodofU',
  'rene_gade',
  'tommy',
  'luciluci',
  'tanko',
  'poltergeist',
  'hlava-havla',
  'telo-ramba',
];

const inputEl = document.querySelector('#username');
const errorEl = document.querySelector('.reg-form__error');
const btnEl = document.querySelector('#btn-register');
const pass1El = document.querySelector('#pass1');
const pass2El = document.querySelector('#pass2');
const regEx = /([-_:])/g;

const checkInputs = () => {
  for (let i = 0; i < users.length; i++) {
    if (inputEl.value === users[i])
      errorEl.textContent =
        'Zadané uživatelské jméno je již použito. Zadej jiné.';
    else console.log('username is ok');
  }

  if (pass1El.value.length > 10 && regEx.test(pass1El.value))
    console.log('password is ok');
  else console.log('incorrect password');

  if (pass1El.value !== pass2El.value) console.log('passwords not match');
};

btnEl.addEventListener('click', checkInputs);
