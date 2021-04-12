'use strict';

// Představte si, že tvoříte e-shop, ve kterém mají produkty následující strukturu.

const product1 = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'kč',
};
// Postupujte dle kroků níže a vytvořte kód pro zobrazení produktu na stránce.

// Vytvořte HTML stránku s následující strukturu
// <body>
//   <section id="products-section"></section>
//   <script src="index.js"></script>
// </body>
// Na začátku souboru index.js si vytvořte objekt product1 a vymyslete si nějaký produkt s vlastnostmi name, price a currency.
// Ve vašem programu do proměnné productHtml sestavte HTML pro váš produkt s použitím vašeho objektu product1. Struktura může vypadat například takto.
// <div class="product">
//   <h2 class="product__name">Mlýnek na kávu</h2>
//   <p class="product__price">Cena: 520 kč</p>
// </div>
// Vyberte ze stránky element #products-section a vložte do něj vámi vytvořené HTML.

const productHtml = `
  <div class="product">
    <h2 class="product__name">${product1.name}</h2>
    <p class="product__price">Cena: ${product1.price} ${product1.currency}</p>
  </div>`;

document.querySelector('#products-section').innerHTML = productHtml;
