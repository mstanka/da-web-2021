'use strict';

const product1 = {
  image: 'img/destniklobouk.jpg',
  name: 'Deštníklobouk',
  description:
    'Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.',
};

const product2 = {
  image: 'img/slepickabelka.jpg',
  name: 'Slepičkabelka',
  description:
    'Nejlepší způsob jak zaujmout neotřelou módou v ulíčkách kolem Staroměstkého náměstí.',
};

const product3 = {
  image: 'img/anatoplavky.jpg',
  name: 'Anatoplavky',
  description:
    'Aby muži na rozpálených plážích kromě vašeho těla obdivovali také vaše nitro.',
};

// const prod1El = document.querySelector('#product1');
// const prod2El = document.querySelector('#product2');
// const prod3El = document.querySelector('#product3');

// prod1El.classList.add('border-primary');

// const btn2El = document.querySelector('#product2 .btn');
// btn2El.classList.remove('btn-primary');

// const title3El = document.querySelector('#product3 .card-title');
// title3El.classList.toggle('text-center');

document.querySelector(
  '#product1',
).innerHTML = `<img class="card-img-top" src=${product1.image} alt=${product1.name}> 
<h2 class="card-title">${product1.name}</h2>
<p class="card-text">${product1.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`;

document.querySelector(
  '#product2',
).innerHTML = `<img class="card-img-top" src=${product2.image} alt=${product2.name}> 
<h2 class="card-title">${product2.name}</h2>
<p class="card-text">${product2.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`;

document.querySelector(
  '#product3',
).innerHTML = `<img class="card-img-top" src=${product3.image} alt=${product3.name}> 
<h2 class="card-title">${product3.name}</h2>
<p class="card-text">${product3.description}</p>
</div>
<button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>`;


// Stáhněte is připravenou webovou stránku, která nabízí několik neotřelých produktů.
// Otevřete si rozbalenou složku ve VS Code a prohlédněte si zdrojové HTML. Stránka je nastylována v Bootstrapu. Co přesně dělají použité CSS třídy není pro toto cvičení podstatné, nemusíte jim tedy nijak rozumět.
// V konzoli prohlížeče si do proměnné uložte kartu s prvním produktem. Pomocí metody classList.add přidejte na tento element třídu border-primary abychom první produkt na stránce zvýraznili.
// Do jiné proměnné v konzoli si uložte tlačítko na druhé kartě. Pomocí metody classList.remove odeberte třídu btn-primary a podívejte se, jak se tlačítko vizuálně změnilo.
// Do další proměnné si uložte element s třídou card-title posledního produktu. Pomocí voláni metody classList.toggle přidejte na tento element třídu text-center. Text by se měl tímto zarovnat na střed. Vyzkoušejte si, že když tuto metodu zavoláte znova, třída se z prvku odstraní. Takto můžete přepínat mezi přidáním a odebráním třídy pomocí opakovaného volání této metody.

// Pokračujte v předchozím cvičení. Všimněte si, že v souboru index.js jsou uloženy údaje k jednotlivým produktům. Budeme chtít obsah naší stránky vygenerovat z těchto dat místo abychom je měli natvrdo zadrátované v HTML kódu.

// Otevřete si soubor index.html a zkopírujte si HTML obsah prvního produktu a vytvořte z něj řetězec v přiloženém JavaScriptovém souboru. Váš kód může vypadat třeba takto.

// const product1HTML = `
//   <img class="card-img-top" src="img/destniklobouk.jpg" alt="Card image cap">
//   <div class="card-body">
//     <h2 class="card-title">Deštníklobouk</h2>
//     <p class="card-text">Vynikající pokud si často zapomínáte deštník a nechcete být nikdy překvapeni nečekanou přeháňkou.</p>
//   </div>
//   <button type="button" class="btn btn-lg btn-primary btn-block">Koupit</button>
// `;

// Obsah prvního produktu v souboru index.html můžeme nyní smazat. Výsledné HTML pak bude vypadat takto.

// <div id="product1" class="card mb-4 box-shadow"></div>
// Pomocí interpolace řetězců předělejte váš JavaScriptový kód tak, že do vašeho řetězce s produktem vložíte obsah vlastností image, name a description.

// Do nějaké proměnné si uložte element prvního produktu a nastavte jeho innerHTML na váš sestavený řetězec. Tímto na stránku vložíme obrázek prvního produktu.

// Opakujte tento postup pro všechny ostatní produkty. Na konci byste měli dospět do stavu, kdy soubor index.html vůbec neosahuje vnitřek karet pro jednotlivé produkty. Jejich obsah je celý vyroben JavaScriptem z připravených dat.