'use strict';

const podcast1 = {
  num: '126',
  title: 'Robot, který snědl koblihu',
  guest: 'Radovan Siwek',
};

console.log('funguju!', podcast1);

// Vytvořte komponentu Podcast která vyrobí HTML strukturu pro jeden podcast.
const Podcast = (props) => {
  const { num, title, guest } = props;
  return `
    <div class="episode">
      <div class="episode__num">${num}</div>
      <div class="episode__body">
        <div class="episode__title">${title}</div>
        <div class="episode__guest">host: ${guest}</div>
      </div>
    </div>`;
};
// V souboru index.html smažte obsah elementu episodes-list. V JavaScriptu vyberte tento element a s použitím komponenty Podcast a vlastnosti innerHTML v něm vytvořte jednu epizodu podcastu dle nějakých vymyšlených dat.

const episodesListEl = document.querySelector('.episodes-list');

episodesListEl.innerHTML = Podcast(podcast1);

// Mějme následující pole obsahující několik epizod našeho podcastu.
const episodes = [
  {
    num: 127,
    title: 'Hledání plyšového Yettiho',
    guest: 'Vojtěch Ryba',
  },
  {
    num: 128,
    title: 'Moderní hrachová polévka',
    guest: 'Kamila Štancová',
  },
  {
    num: 129,
    title: 'Poloautomatické zrcadlo',
    guest: 'Janka Janovská',
  },
  {
    num: 130,
    title: 'Máčené hlavy parlamentu',
    guest: 'Jonáš Daněk',
  },
  {
    num: 131,
    title: 'Služby na hraně přívěsu',
    guest: 'Tereza Křivánková',
  },
  {
    num: 132,
    title: 'Klasifikace sněžných klokanů',
    guest: 'Josef Stix',
  },
  {
    num: 133,
    title: 'Rybolov v Oceánu bouří',
    guest: 'Ludmila Gajová',
  },
];
//Napište cyklus, který projde toto pole a pro každou položku vytvoří novou epizodu uvnitř elementu episodes-list.

for (let i = 0; i < episodes.length; i++) {
  episodesListEl.innerHTML += Podcast(episodes[i]);
}
