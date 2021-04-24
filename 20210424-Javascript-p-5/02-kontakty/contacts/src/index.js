import './style.css';

console.log('funguju!');

const app = document.querySelector('#app');

// const icon = document.createElement('img');
// icon.setAttribute(
//   'src',
//   'https://kodim.cz/czechitas/daweb/pokrocily-js/dom-elementy/excs/kontakty/assets/contact.png',
// );
// icon.classList.add('icon');

const contact1 = document.createElement('div');
contact1.classList.add('contact');
contact1.innerHTML = `<span class="name">Jaromír Bystřina</span><br>
<span class="phone">+420 777 666 323</span><br>
<span class="email">lesni.bystrina@gmail.com</span>`;

app.appendChild(contact1);
// contact1.appendChild(icon);

const contact2 = document.createElement('div');
contact2.classList.add('contact');
contact2.innerHTML = `<span class="name">Petr Novak</span><br>
<span class="phone">+420 757 555 323</span><br>
<span class="email">petr.novak@gmail.com</span>`;

app.appendChild(contact2);

const contact3 = document.createElement('div');
contact3.classList.add('contact');
contact3.innerHTML = `<span class="name">Tom Dvorak</span><br>
<span class="phone">+420 757 555 323</span><br>
<span class="email">tom.dvorak@gmail.com</span>`;

app.appendChild(contact3);

// app.insertBefore(contact2, contact1);
