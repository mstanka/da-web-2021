'use strict';

// Rodné číslo se skládá z deseti číslic. Prvních šest číslic popisuje datum narození ve formátu RRMMDD, tj. po dvou číslicích pro rok, měsíc a den narození. Např. 701020 označuje datum narození 20. října 1970. Přitom ženy mají k měsíci narození připočteno 50 (tzn. 706020 označuje ženu narozenou 20. října 1970). Zbytek rodného čísla (tzv. koncovka) odlišuje osoby stejného pohlaví narozené ve stejný den a zpravidla se odděluje lomítkem. My jej však lomítkem oddělovat nebudeme. Celé rodné číslo musí být beze zbytku dělitelná jedenácti, aby bylo možno snadno detekovat překlepy či jiné náhodné chyby.

// const birthNumber = document.querySelector('#input').value;
// console.log(birthNumber);
// const formEl = document.getElementById('form');
// const btnEl = document.querySelector('#btn');
// const messageEl = document.querySelector('#message');
// const digitsEl = document.querySelector('.digits');

////////////////////////////////////////////////////
////// Cvičení: Hodnoty, proměnné, podmínky, funkce

//// 1. Rodná čísla
// Pomocí funkce prompt se zeptejte uživatele na rodné číslo. Rodné číslo zkontrolujte podle bodů popsaných níže. Každé rodné číslo musí mít přesně 10 znaků. Zkontrolujte tedy, že zadaný řetězec je délky 10 a neprojdou nám například vstupy typu 'Žádné číslo ti nedám'.
// Každé rodné číslo musí být celé číslo. Zde je nějaká hodnota celé číslo v JavaScriptu zkontrolujete pomocí funkce Number.isInteger. Musíte však vstup předtím převést na číslo pomocí funkce Number.
// Každé rodné číslo musí být dělitelné 11. Zkontrolujte tedy, že zadané číslo je dělitelné jedenácti. Pokud jsou všechny podmínky splněny. rodné číslo budeme považovat za platné.

// let birthNumber = prompt('Zadej rodne cislo');
// if (birthNumber.length === 10) {
//   console.log('Zadany vstup ma 10 znaku');
// } else {
//   console.log('Toto neni vstup o delce 10 znaku');
// }

// birthNumber = Number(birthNumber);
// if (typeof birthNumber === 'number' && !isNaN(birthNumber)) {
//   console.log('Zadany vstup je cislo');
// } else {
//   console.log('Zadany vstup neni cislo');
// }

// birthNumber = Number.isInteger(Number(birthNumber));

// console.log(birthNumber % 11 === 0);

//// 2. Platnost jako funkce
//Využijte kód z předchozího příkladu a vytvořte funkci s názvem checkBirthID, která zkontroluje platnost rodného čísla. Funkce bude mít jeden parametr, ve kterém bude očekávat rodné číslo jako řetězec, a bude vracet pravdivostní hodnotu udávající, zda řetězec obsahuje platné rodné číslo či nikoliv.

// const checkBirthID = (birthNumber) => {
//   if (
//     birthNumber.length === 10 && //     !isNaN(birthNumber) &&
//     typeof Number(birthNumber) &&
//     Number.isInteger(Number(birthNumber)) &&
//     Number(birthNumber) % 11 === 0
//   ) {
//     return true;
//   }
//   return false;
// };

// console.log(checkBirthID(birthNumber));

////////////////////////////
////// Cvičení: Pole a cykly

//// 3. Kontrola cifer
// V případě, že uživatel zadal rodné číslo špatně, budeme chtít zkontrolovat jeho cifry a říct, kde se stala chyba. Pokračuje v kódu z předchozího příkladu.

//Vytvořte pole digits obsahující všechny cifry '0' až '9' jako řetězce.
// Napište funkci isDigit, která na vstup dostane řetězec a vrátí true pokud tento řetězec obsahuje právě jednu cifru. Použijte k tomu pole digits a metodu includes (viz dokumentace). V opačném případě funkce vrátí false.
// Když funkce checkBirthID vrátí false, projděte tento řetězec pomocí cyklu for znak po znaku a vypište do konzole všechny znaky, které nejsou cifry. Použijte k tomu funkci isDigit.

// const isDigit = (myString) => {
//   return digits.includes(myString);
// };

// if (!checkBirthID(birthNumber)) {
//   for (let i = 0; i < birthNumber.length; i++) {
//     if (!isDigit(birthNumber[i])) {
//       console.log(birthNumber[i]);
//     }
//   }
// }

///////////////////////////////////////////
////// Cvičení: Objekty, map, filter

//// 4. Kontrola cifer pomocí filtru
// Jakmile uživatel zadá rodné číslo jako řetězec a máte ověřeno, že má skutečně délku 10, převeďte tento řetězec na pole pomocí funkce Array.from.
// Na vyrobeném poli znaků zavolejte metodu filter a získejte pole znaků, které nejsou cifry. Opět použijte funkci isDigit z předchozího cvičení. Výsledné pole vypište to konzole.

// const numberArr = Array.from(birthNumber);
// const filtered = numberArr.filter((num) => !isDigit(num));
// console.log(filtered);

//// 5. Kontrola cifer pomocí mapy
// V tomto cvičení budeme chtít kromě seznamu špatně zadaných znaků také u každného znaku informaci, zde ja správně, či nikoliv.
//Podobně jako v předchozím cvičení vyrobte z uživatelem zadaného řetězce pole znaků. Na tomto poli použijte metodu map a vytvořte pole objektů, obsahující informace o každém znaku. Například pro vstup
// 462748/312
// chceme jako výsledek obdržet takovéto pole.
// [
//   { char: '4', digit: true },
//   { char: '6', digit: true },
//   { char: '2', digit: true },
//   { char: '7', digit: true },
//   { char: '4', digit: true },
//   { char: '8', digit: true },
//   { char: '/', digit: false },
//   { char: '3', digit: true },
//   { char: '1', digit: true },
//   { char: '2', digit: true },
// ];
// Výsledné pole vypište to konzole.
// Vyzkoušejte váš kód na různých vstupech a zkontrolujte, že generuje správné výsledky. Vaše aplikace by měla do konzole vypsat jednak seznam špatně zadaných znaků tak, jak jsme to dělali v předchozím cvičení, jednak pole objektů jako výše.

// console.log(numberArr);
// const numberObj = numberArr.map((num) => ({
//   char: num,
//   digit: isDigit(num),
// }));
// console.log(numberObj);

//////////////////////////////////
/////// Cvičení: DOM a události

//// 6. Vstup pomocí formuláře
// Upravte vaši aplikaci na kontrolu rodných čísel tak, aby obsahovala formulář.
// Do HTML vaší stránky vložte formulář s textovým políčkem pro rodné číslo. Formulář se bude odesílat tlačítkem Zkontrolovat.
// Na událost submit formuláře pověste posluchač, který provede kontrolu zadaného rodného čísla tak, jak jsme ji dělali v předchozím cvičení.
// Do HTML vložte div s nějakým vhodně zvoleným id. Tento div bude představovat zprávu pro uživatele.
// Z přechozího cvičení máme připravený kód, který pomocí filter generuje pole špatně zadaných znaků. Pokud je toto pole prázdné, vypište do vašeho divu V pořádku.
// Pokud pole prázdné není, vypište zprávu ve smyslu V rodném čísle jsou chyby
// Pole objektů obsahující informace o jednotlivých cifrách zatím stále vypisujte do konzole. Vrátime se k němu v následujících cvičeních.

//////////////////////////////////////////
//// Cvičení: innerHTML a vlastní DOM elementy
/// 7. Cifry jako komponenty
// Pokračuje v kódu předchozího příkladu. Budeme chtít zobrazit jednotlivé cifry rodného čísla dle následujícího vzoru.
// Vytvořte čistě JavaScriptovou komponentu Digit, která bude představovat jednu cifru rodného čísla. Tato komponenta bude jako svůj parametr brát props s následující strukturou.
// {
//   char: '3',
//   digit: true,
// }
// Komponentu napište tak, aby vracela řetězec obsahující HTML.

// Pokud bude prop digit mít hodnotu true, bude mít znak zelené pozadí a černý text. V opačném případě bude mít červené pozadí a bílý text.

// V souboru index.html vytvořte div s nějakým smysluplným id, ve kterém budeme zobrazovat jednotlivé cifry. Nastylujte jej pomocí flexboxu tak, abychom mohli cifry zobrazovat vedle sebe.

// Jakmile uživatel klikne na tlačítko Zkontrolovat, ve vašem programu už máte text zadaný uživatelem převedený na pole. Projděte toto pole pomocí cyklu a naplňte váš připravený div ciframi s použitím komponenty Digit a vlastnosti innerHTML.

// Vaše aplikce by měla ve výsledku fungovat tak, že kdykoliv uživatel zadá rodné číslo a nechá si jej zkontrolovat, aplikace vypíše, zda je číslo zadané dobře nebo špatně, a zobrazí jednotlivé znaky čísla s tím, že cifry jsou zelené a špatně zadané znaky jsou červené.

const btnEl = document.querySelector('#btn');
const messageEl = document.querySelector('#message');
const digitsEl = document.querySelector('.digits');
const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const handleClick = () => {
  const birthNumber = document.querySelector('#input').value; 

  btnEl.disabled = true;
  document.querySelector('#input').value = ' ';

  const checkBirthID = (birthNumber) => {
    if (
      birthNumber.length === 10 &&
      typeof Number(birthNumber) &&
      Number.isInteger(Number(birthNumber)) &&
      Number(birthNumber) % 11 === 0
    ) {
      return true;
    }
    return false;
  };

  const isDigit = (myString) => {
    return digits.includes(myString);
  };

  const numberArr = Array.from(birthNumber);
  const filtered = numberArr.filter((num) => !isDigit(num));

  const numberObj = numberArr.map((num) => ({
    char: num,
    digit: isDigit(num),
  }));
  console.log(numberObj);

  const Digit = ({ char, digit }) => {
    return `
      <span class=${digit === true ? 'green' : 'red'}>${char}<span>
    `;
  };

  if (checkBirthID(birthNumber) && filtered.length === 0) {
    messageEl.textContent = 'V pořádku';
  } else {
    messageEl.textContent = 'V rodném čísle jsou chyby';
  }

  for (const index in numberObj) {
    digitsEl.innerHTML += Digit(numberObj[index]);
  }
};

btnEl.addEventListener('click', handleClick);
