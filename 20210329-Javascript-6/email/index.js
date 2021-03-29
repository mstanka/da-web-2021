'use strict';

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

fillSubject('Toto je novy subject');

const goodbye = (greetName) => {
  return `S pozdravem ${greetName}`;
};

const fillBody = (body, name) => {
  const greeting = goodbye(name);
  document.querySelector('.email__body').textContent = `${body} ${greeting}`;
};

fillBody('Toto je aktualizovana zprava', 'Pavel Ovesny');
