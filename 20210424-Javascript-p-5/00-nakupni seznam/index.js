'use strict';

const ShoppingItem = (props) => {
  const element = document.createElement('div');
  element.classList.add('item');
  element.innerHTML = `
    <span class="item__name">${props.name}</span>
    <span class="item__amount">${props.amount}</span>
    <button class='btn-bought'>Koupeno</button>
  `;

  const deleteBtn = element.querySelector('.btn-bought');
  deleteBtn.addEventListener('click', () => {
    element.classList.add('item--bought');
  });

  return element;
};

const ShoppingList = (props) => {
  const element = document.createElement('div');
  element.classList.add('shopping-list');

  for (let i = 0; i < props.items.length; i += 1) {
    element.appendChild(ShoppingItem(props.items[i]));
  }

  return element;
};

const list = [
  { name: 'mrkev', amount: '3ks' },
  { name: 'paprika', amount: '2ks' },
  { name: 'cibule', amount: '2ks' },
  { name: 'čínské zelí', amount: '1ks' },
  { name: 'arašídy', amount: '250g' },
  { name: 'sojová omáčka', amount: '1ks' },
];

const mainElm = document.querySelector('main');
mainElm.innerHTML = '';
mainElm.appendChild(ShoppingList({items: list}))

const addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
  const nameInput = document.querySelector('#name-input');
  const amountInput = document.querySelector('#amount-input');

  list.push({ name: nameInput.value, amount: amountInput.value });

  nameInput.value = '';
  amountInput.value = '';

  mainElm.innerHTML = '';
  mainElm.appendChild(ShoppingList({ items: list }));

  nameInput.focus();
});
