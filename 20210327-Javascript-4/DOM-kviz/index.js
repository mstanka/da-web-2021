'use strict';

const questionEl = document.querySelector('.question');
questionEl.textContent =
  'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

const answerTextEl = document.querySelector('.answer__text');
const response = prompt('Zadej spravnou odpoved: ');
answerTextEl.textContent = response;

const answerEl = document.querySelector('.answer');
if (response === 'Bell') {
  answerEl.classList.add('answer--correct');
} else {
  answerEl.classList.add('answer--wrong');
}

// Stáhněte si připravenou stránku. Napište JavaScriptový program, který vybere element s třídou question a nastaví jeho obsah na nějakou kvízovou otázku, například
// Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.
// Použijte funkci prompt a zeptejte se uživatele na správnou odpověď. Vyberte element s třídou answer__text a nastavte obsah elementu na odpověď od uživatele. Vyberte element s třidou answer. Pokud je odpověď příjmení Bell, přidejte k tomuto elementu třídu answer--correct. V opačném případě přidejte třídu answer--wrong. Dejte pozor, abyste nesmazali původní třídu answer.