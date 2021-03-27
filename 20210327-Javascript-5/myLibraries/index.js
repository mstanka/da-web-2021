//////////////// stedry den
// const stedryDen = dayjs('2021-12-24');
// const dnes = dayjs();
// const dnesEl = document.getElementById('dnes');
// dnesEl.innerText = dayjs();
// const jezisekEl = document.getElementById('jezisek');

// if (dnes.isAfter(stedryDen)) {
//   // console.log('Musíš počkat na příští rok');
//   jezisekEl.innerText = 'Musíš počkat na příští rok';
// } else {
//   // console.log('Už brzy přijde Ježíšek!');
//   jezisekEl.innerText = 'Už brzy přijde Ježíšek!';
// }

///////////////// kreditni karta
console.log(validator.isEmail('email@email.com'));
console.log(validator.isCreditCard('2345234523452345'));

const email = prompt('Zadej email');
const emailEl = document.getElementById('msg');
if(validator.isEmail(email)){
  emailEl.innerText = 'E-mail v pořádku';
  emailEl.classList.add('msg--valid');
} else {
  emailEl.innerText = 'Neplatný e-mail';
  emailEl.classList.add('msg--invalid');
}


