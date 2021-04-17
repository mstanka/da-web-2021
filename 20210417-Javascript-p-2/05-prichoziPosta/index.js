'use strict';

// Pokračujte v předchozím příkladu.

// Prohlédněte si data, která poskytuje API na adrese https://api.kodim.cz/daweb/inbox.
// Pomocí funkce fetch tato data stáhněte, projděte je cyklem a zapojte do stránky.
// Vytvořte komponentu Inbox, která bude zobrazovat celý seznam e-mailů. Jako svoje props komponenta obdrží objekt, který vypadá takto:
// {
//   inbox: // pole e-mailů
// }
// V komponentě použíjte váš cyklus zobrazující jednotlivé e-maily.
// Smažte z HTML prvek #inbox a vytvořte obsah stránky tak, že výsledek komponenty Inbox zapojíte do prvku #app.

const app = document.querySelector('#app');

const Email = ({ sender, subject, time }) => {
  return `
    <div class="email">
      <div class="email__icon email__icon--closed"></div>
      <div class="email__fill">
        <div class="email__sender">${sender}</div>
        <div class="email__subject">${subject}</div>
      </div>
      <div class="email__end">
        <div class="email__time">${time}</div>
      </div>
    </div>
`;
};

const Inbox = ({ inbox }) => {
  for (let i = 0; i < inbox.length; i++) {
    app.innerHTML += Email(inbox[i]);
  }

  return `
    <div id="inbox" class="inbox">${inbox}</div>
    `;
};

fetch('https://fasttest.hasura.app/api/rest/inbox')
  .then((response) => response.json())
  .then((data) => {
    Inbox(data);
  });
