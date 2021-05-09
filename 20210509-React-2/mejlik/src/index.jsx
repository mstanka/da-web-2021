import React from 'react';
import { render } from 'react-dom';
import Inbox from './Inbox';
import Header from './Header';
import './style.css';

const App = () => (
  <div className="container">
    <Header user="Radovan Holátko" />
    <Header />
    <Inbox account="radovan.holatko@mejlik.cz" messages={3} />
  </div>
);

render(<App />, document.querySelector('#app'));
