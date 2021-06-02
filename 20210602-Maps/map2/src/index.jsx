import React from 'react';
import { render } from 'react-dom';
import { Mapa } from './components/mapa';
import './style.css';

const App = () => (
  <div className="container">
    <Mapa />
  </div>
);

render(<App />, document.querySelector('#app'));

// https://czechitas-podklady-web.github.io/Cviceni-React-mapy/