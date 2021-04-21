'use strict';

const newList = document.querySelector('.list').value;
const newItemName = document.querySelector('.item-name').value;
const newItemAmount = document.querySelector('.item-amount').value;
const btnEl = document.querySelector('.btn');
const btnItemEl = document.querySelector('.btn-item');

// add new list
btnEl.addEventListener('click', () => {
  fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/${newList}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  });
});

// add new items to the list
btnItemEl.addEventListener('click', () => {
  const newItem = {
    product: newItemName,
    amount: newItemAmount,
  };

  fetch(`https://apps.kodim.cz/daweb/shoplist/api/lists/${newList}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product: newItem.product,
      amount: newItem.amount,
    }),
  });
});
