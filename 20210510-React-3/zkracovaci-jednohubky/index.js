// const isEmail = (str) => {
//   return str.includes('@');
// };

const isEmail = (str) => str.includes('@');

// const roll = () => {
//   return Math.floor(Math.random() * 6) + 1;
// };

const roll = () => Math.floor(Math.random() * 6) + 1;

// const getNumber = (id) => {
//   return Number(document.querySelector(`#${id}`).value);
// };

const getNumber = (id) => Number(document.querySelector(`#${id}`).value);

// const weather = (temperature) => {
//   if (temperature > 16) {
//     return 'teplo';
//   }

//   return 'zima';
// };

const weather = (temperature) => (temperature > 16 ? 'teplo' : 'zima');
