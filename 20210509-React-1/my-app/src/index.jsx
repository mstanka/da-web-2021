import React from 'react';
import { render } from 'react-dom';
import './style.css';

const myName = 'Markéta Staňková';
const myClass = 'intro';

const content = (
  <div className="container">
    <header>
      <h1>{myName}</h1>
    </header>
    <main>
      <p className={myClass}>Moje první React aplikace</p>
    </main>
  </div>
);

render(
 content,
  document.querySelector('#app'),
);
