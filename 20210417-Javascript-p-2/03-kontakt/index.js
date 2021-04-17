'use strict';

// const Contact = (props) => {
//   return `
//     <div class="contact">
//       <div class="contact__first">${props.first_name}</div>
//       <div class="contact__last">${props.last_name}</div>
//       <div class="contact__email">${props.email}</div>
//     </div>
//   `;
// };

const bodyEl = document.querySelector('body');

const Contact = (first_name, last_name, email) => {
  return `
    <div class="contact">
      <div class="contact__first">${first_name}</div>
      <div class="contact__last">${last_name}</div>
      <div class="contact__email">${email}</div>
    </div>
  `;
};

console.log(Contact('Karel', 'Dvorak', 'karel.d@email.cz'));
bodyEl.innerHTML = Contact('Karel', 'Dvorak', 'karel.d@email.cz');
