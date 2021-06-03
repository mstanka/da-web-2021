import fs from 'fs';

export const getKontakty = () => {
  const kontaktyContents = fs.readFileSync('data/kontakty.json', 'utf8');
  return JSON.parse(kontaktyContents);
};

// v ramci vlasniho pocitace lze tohle udelat
// fs knihovna soucasti node.js
// cte soubor
// cesta od root adresare
// utf8 - json vzdy v tomto kodovani
// parse - prevede json na js objekt

