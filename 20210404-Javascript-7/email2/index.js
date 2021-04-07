'use strict';

// Stáhněte si řešení příkladu E-mail z předchozí lekce.
// Všimněte si funkce goodbye, která generuje pozdrav na konec e-mailu. Přidejte alespoň dvě další funkce, kde každá generuje k zadanému jménu jiný typ pozdravu. Například formalGoodbye pro velmi formální pozdravy, nebo rudeGoodbye, pokud se chcete rozloučit naštvaně.
// Udělejte z funkce fillBody funkci vyššího řádu. Přidejte jí třetí parametr goodbyeFunc, který představuje funkci, pomocí které se má vygenerovat závěrečný pozdrav. Vyzkoušejte zavolat funkci fillBody postupně s každou z vašich zdravících funkcí a ověřte, že vše správně funguje.

const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGoodbye = (name) => {
  return 'S uctou ' + name;
};

const rudeGoodbye = (name) => {
  return 'Tak se cau ' + name;
};

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillBody = (body, name, goodbyeFunc) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.textContent = body + ' ' + goodbyeFunc(name);
};

// fillBody(
//   'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
//   'Karel',
//   goodbye,
// );

// fillBody('Lorem elit.', 'Pepa', formalGoodbye);

fillBody(
  'Amet consectetur adipisicing elit.',
  'Tomas',
  rudeGoodbye,
);
