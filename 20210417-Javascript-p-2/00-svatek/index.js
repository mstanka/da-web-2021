 const svatekDnes = document.querySelector('.svatek-dnes');

 // promise
 console.log('Začínám');

 fetch('https://api.abalin.net/today?country=ee')
   .then((response) => response.json())
   .then((json) => {
     console.log('Přišli mi data');
     console.log(json);
     svatekDnes.textContent = json.data.namedays.ee;
   });

 console.log('Končím');

 const danyDen = document.querySelector('.svatek-dany-den');
 const jmeno = document.querySelector('.jmeno');
 const zeme = document.querySelector('.zeme');
 const formular = document.querySelector('.formular');

 formular.addEventListener('submit', (udalost) => {
   udalost.preventDefault();

   const zdaneJmeno = jmeno.value;
   const zdanaZeme = zeme.value;

   console.log('Jméno', zdaneJmeno);
   console.log('Země', zdanaZeme);

   // {"country code":"cz","results":[{"day":26,"month":5,"name":"Filip"}]}
   fetch(
     `https://api.abalin.net/getdate?name=${zdaneJmeno}&country=${zdanaZeme}`,
   )
     .then((response) => response.json())
     .then((json) => {
       const prvniPolozka = json.results[0];
       const den = prvniPolozka.day;
       const mesic = prvniPolozka.month;
       console.log(den);
       console.log(mesic);
       danyDen.textContent = `${den}. ${mesic}.`;
     });
 });
