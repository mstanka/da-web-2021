'use strict';

// Zatím jsme z API pro získávání svátků viděli endpointy /today a /getdate. Existují však ještě další.

// Napište aplikaci, která uživateli zobrazí, kdo má svátek zítra. K tomu použíjte endpoint /tomorrow, který funguje podobně jako endpoint /today.

// https://api.abalin.net/today?country=cz

 const svatekZitra = document.querySelector('.svatek-zitra');

 fetch('https://api.abalin.net/tomorrow?country=cz')
   .then((response) => response.json())
   .then((data) => {
     console.log('Přišli mi data');
     console.log(data);
     svatekZitra.textContent = data.data.namedays.cz;
   });
   