'use strict'
////////////////////////////////////
////////////////////////// emaily
// const email = prompt('Zadej svuj email: ');
// const atIndex = email.indexOf('@');
// const userName = email.slice(0, atIndex);
// const domain = email.slice(atIndex + 1);

// const parsedEmail = {
//   userName: userName,
//   domain: domain,
// };

// document.write(
//   `Username is ${parsedEmail.userName.toUpperCase()} and domain is ${parsedEmail.domain.toUpperCase()}`,
// );

///////////////////////////////////////
///////////////////////// dorucovani

// const street = prompt('Zadej ulici: ');
// const streetNumber = prompt('Zadej cislo domu: ');
// const city = prompt('Zadej mesto: ');
// const zip = prompt('Zadej PSC: ');

// const address = `
//   <div class="address">
//     <h1>Zadal jsi tuto adresu:</h1>
//     <p>${street} ${streetNumber}</p>
//     <p>${zip} ${city}</>
//   </div>
// `;

// document.write(`${address}`);

////////////////////////////////////////////////////
///////////////////////// registrace na ockovani
// const age = prompt('Zadej vek');
// if (age >= 65) {
//   console.log('Vek je v poradku');
// } else {
//   console.log('Nizky vek');
// }

// const password = prompt('Zadej heslo');
// if (password.length <= 8) {
//   console.log('Slabe heslo');
// }

////////////////////////////////////////////
//////////////////////////// cena vstupenky
// const plnaCena = 12;
// const age = prompt('Zadej vek');
// let cena = 0;

// if (age >= 6 && age <= 26) {
//   cena = Math.floor(plnaCena * 0.65);
// } else if (age >= 27 && age <= 64) {
//   cena = plnaCena;
// } else {
//   cena = Math.floor(plnaCena * 0.5);
// }

// document.write(`Je ti ${age} let a tvoje vstupenka stoji ${cena} korun`);

///////////////////////////////////////////
////////////////////////////// fit email
// const firstName = prompt('Zadej krestni jmeno bez diakritiky')
//   .trim()
//   .slice(0, 3)
//   .toLowerCase();
// const lastName = prompt('Zadej prijmeni bez diakritiky')
//   .trim()
//   .slice(0, 5)
//   .toLowerCase();
// const domain = 'fit.cvut.cz';

// document.write(`${lastName}${firstName}@${domain}`);

//////////////////////////////////////////////////
//////////////////////////////// mnozstevni slevy
// const numberOfPieces = prompt('Zadej kolik objednavas tricek');
// let cena = 300;

// if (numberOfPieces >= 1000) {
//   cena = 120;
// } else if (numberOfPieces >= 500) {
//   cena = 150;
// } else if (numberOfPieces >= 200) {
//   cena = 200;
// } else if (numberOfPieces > 50) {
//   cena = 250;
// }

// const totalPrice = numberOfPieces * cena;

// document.write(
//   `Objednal sis ${numberOfPieces} kusu, a tvoje cena objednavky je ${totalPrice} korun.`,
// );

/////////////////////////////////////////////
//////////////////////// superhruba mzda
const hodinovaMzda = prompt('Zadej hodinovou mzdu'); // 200
const uvazek = prompt('Zadej uvazek v procentech') / 100; // 100
const hodinZaMesic = uvazek * 8 * 21;
console.log("hodinZaMesic", hodinZaMesic); // 168

const hrubaMzda = hodinovaMzda * hodinZaMesic;
console.log("hrubaMzda", hrubaMzda); // 33 600
const superHrubaMzda = Math.ceil(
  hrubaMzda + hrubaMzda * 0.09 + hrubaMzda * 0.248,
);
console.log("superHrubaMzda", superHrubaMzda); // 44 957

const zakladDane = Math.round(superHrubaMzda / 100) * 100;
console.log("zakladDane", zakladDane); // 45 000
const dan = zakladDane * 0.15;
const sleva = 2070;

const cistaMzda = Math.floor(
  hrubaMzda - hrubaMzda * 0.045 - hrubaMzda * 0.065 - dan + sleva,
);

console.log("cistaMzda", cistaMzda); // 25 224
