'use strict';

const listEl = document.querySelector('.list');
const bodyEl = document.querySelector('body');

fetch('https://nakupni-seznam.herokuapp.com/api/example/')
  .then((response) => response.json())
  .then((data) => {
    // const polozky = data.items;

    // for (let i = 0; i < polozky.length; i++) {
    //   // console.log(polozky[i]);
    //   // const stitek = polozky[i].label;
    //   // const amount = polozky[i].amount;
    //   // console.log(`${stitek}: ${amount}`);

    //   // const jednaPolozka = Polozka({
    //   //   label: polozky[i].label,
    //   //   amount: polozky[i].amount,
    //   // });

    //   const jednaPolozka = Polozka(polozky[i]);
    //   listEl.innerHTML += jednaPolozka;
    // }

    console.log(NakupniSeznam(data));
    bodyEl.innerHTML = NakupniSeznam(data);
  });

// const Polozka = (props) => {
//   return `
//     <li>${props.label}: (${props.amount})</li>
//    `;
// };

const Polozka = ({ label, amount }) => {
  // const {label, amount} = props;
  return `
    <li>${label}: (${amount})</li>
   `;
};

const NakupniSeznam = ({ items }) => {
  let response = '<ul>';

  for (let i = 0; i < items.length; i++) {
    const oneItem = Polozka(items[i]);
    response += oneItem;
  }
  response += '</ul>';

  return response;
};
