import React from 'react';
import { render } from 'react-dom';
import MyMap from './components/MyMap';
import './style.css';

const App = () => (
  <div className="container">
    <MyMap />
  </div>
);

render(<App />, document.querySelector('#app'));
