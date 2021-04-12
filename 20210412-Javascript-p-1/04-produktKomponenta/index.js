'use strict';

// Vytvořte funkci Product, s jedním parametrem props. Tato funkce bude představovat komponentu pro jeden produkt.
// Do funkce Product vložte kód vytvářející HTML pro jeden produkt. Dejte pozor, že uvnitř komponenty se produkt předává v parametru props. Nechť vaše funkce jako svůj výsledek vrátí vyrobené HTML.
// Použijte vaši komponentu k zobrazení jednoho produktu na stránce.
// Vytvořte si pole products s alespoň třemi různými produkty. Pomocí cyklu toto pole projděte a pomocí vaší komponenty zobrazte na stránce každý jednotlivý produkt.

const products = [
  {
    name: 'Rajcata',
    price: '34',
    currency: 'czk',
  },
  {
    name: 'Okurka',
    price: '24',
    currency: 'czk',
  },
  {
    name: 'Chleba',
    price: '29',
    currency: 'czk',
  },
  {
    name: 'Mleko',
    price: '14',
    currency: 'czk',
  },
  {
    name: 'Jablka',
    price: '27',
    currency: 'czk',
  },
];

const Product = (props) => {
  return `
    <div class="product">
      <h2 class="product__name">${props.name}</h2>
      <p class="product__price">Cena: ${props.price} ${props.currency}</p>
    </div>
    `;
};

const prodEl = document.querySelector('#products-section');

for (let i = 0; i < products.length; i++) {
  prodEl.innerHTML += Product(products[i]);
}
