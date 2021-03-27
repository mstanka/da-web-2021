'use strict';

//////////////////////////////////
/////////////////////// obsah elipsy
// Z matematiky víme, že známe-li šířku a výšku elipsy, její obsah je polovina šířky krát polovina výšky krát číslo π.
// Založte si prázdnou stránku s JavaScriptovým souborem a napište funkci ellipseArea, která spočítá plochu pozemku dle zadané šířky a výšky. Číslo π najdete v JavaScriptu v proměnné Math.PI.
const elipseArea = (width, height) => {
  return (width / 2) * (height / 2) * Math.PI;
};
console.log(`Obsah elipsy je: ${elipseArea(4, 5).toFixed(2)}`);

//////////////////////////////////////
///////////////// maximum ze dvou cisel
// Napište funkci max2, která vrátí větší ze dvou zadaných čísel. V JavaScriptu už na toto funkce existuje, jmenuje se Math.max. Pro účely tohoto příkladu se budeme tvářit, že o ní nevíme.
const maxNumber = (num1, num2) => {
  return num1 > num2 ? `Vetsi cislo je ${num1}` : `Vetsi cislo je ${num2}`;
};
console.log(maxNumber(4, 7));

/////////////////////////////
////////////// parsovani data
// Bez použití knihovny dayjs napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:
// > parseDate('12.03.2015')
// { day: 12, month: 3, year: 2015 }
// > parseDate('06.04.2021')
// { day: 6, month: 4, year: 2021 }
const parseDate = (inputStr) => {
  if (!inputStr.length === 10) return;

  let day = inputStr.slice(0, 2);
  if (day.startsWith(0)) day = day.substr(-1);

  let month = inputStr.slice(3, 5);
  if (month.startsWith(0)) month = month.substr(-1);

  const year = inputStr.slice(-4);
  return `{day: ${day}, month: ${month}, year: ${year}}`;
};
console.log(parseDate('16.02.2021'));

///////////////////////////////////
//////////////////// formatovani data
// Bez použití knihovny dayjs napište funkci formatDate, která na vstupu obdrží objekt představující datum v následujícím formátu.
// { day: 12, month: 3, year: 2015 }
// Funkce vrátí řetězec představující datum ve formátu DD.MM.YYYY. Příklad použití.
// > formatDate({ day: 6, month: 4, year: 2021 })
// "06.04.2021"
// V tomto cvičení se vám jistě bude hodit metoda padStart. Zkuste také uvnitř těla funkce použít destrukturování.
const formatDate = ({ day, month, year }) => {
  day = String(day).padStart(2, '0');
  month = String(month).padStart(2, '0');
  return `${day}.${month}.${year}`;
};
console.log(formatDate({ day: 42, month: 2, year: 2020 }));
