'use strict';

///////////////////////////
////////////// 6 - catering
const justFood = (numPeople) => {
  return `catering od Just Food pro ${numPeople} lidí za ${numPeople * 100} kč`;
};

const yourMama = (numPeople) => {
  return `catering od Your Mama pro ${numPeople} lidí za ${numPeople * 300} kč`;
};

const flavourHaven = (numPeople) => {
  return `catering od Flavour Haven pro ${numPeople} lidí za ${
    numPeople * 500
  } kč`;
};

const createEvent = (eventName, numPeople, catering) => {
  console.log(`${eventName} s ${catering(numPeople)}`);
};

createEvent('Inaugurace', 100, flavourHaven);
createEvent('Jina inaugurace', 100, yourMama);
createEvent('A dalsi inaugurace', 100, justFood);
