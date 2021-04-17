'use strict';

console.log('funguju!');

const data = {
  header: {
    title: 'Jogíni',
    links: ['domů', 'lekce', 'náš tým', 'události', 'kontakt'],
  },
  intro: {
    heading: 'Vítejte mezi Jogíny',
    text: `Naše lekce jsou zaměřeny na potřeby  klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce.`,
  },
  pose: {
    src: 'img/yoga-pose.jpg',
  },
};

const app = document.querySelector('#app');

const Header = ({ title, links }) => {
  let link = '';
  for (let i = 0; i < links.length; i++) {
    link += `<a href="#">${links[i]}</a>`;
  }
  return `
    <header>
      <h1 class="site-title">${title}</h1>
      <nav>
        ${link}
      </nav>
    </header>
`;
};

const Intro = ({ heading, text }) => {
  return `
    <div class="intro">
      <h2>${heading}</h2>
      <p>${text}</p>
    </div>
  `;
};

const Pose = ({ src }) => {
  return `
    <img class="pose" src=${src} />
  `;
};

app.innerHTML += Header(data.header);
app.innerHTML += Intro(data.intro);
app.innerHTML += Pose(data.pose);
