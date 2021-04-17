'use strict';

// Stáhněte si zadání aplikace pro práci s e-maily.
// Podívejte se, jak se v HTML vytváří jeden e-mail.
// Smažte v HTML obsah elementu #inbox a vytvořte komponentu s názvem Email, která vytvoří HTML pro jeden e-mail. Objekt props pro tuto komponenty bude vždy obsahovat položky sender, subject a time.
// Pomocí vaší komponenty vložte na stránku jeden e-mail.

const inboxEl = document.querySelector('#inbox');

const data = {
  user1: {
    sender: 'Karel',
    subject: 'jdem na pivo',
    time: '18:30',
  },
  user2: {
    sender: 'Pavel',
    subject: 'fotbal',
    time: '14:30',
  },
  user3: {
    sender: 'Jana',
    subject: 'nakupovani',
    time: '12:30',
  },
  user4: {
    sender: 'Tom',
    subject: 'nedelni party',
    time: '14:45',
  },
};

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

// inboxEl.innerHTML += Email(data.user1);
// inboxEl.innerHTML += Email(data.user2);

for (const user in data) {
  inboxEl.innerHTML += Email(data[user]);
}
