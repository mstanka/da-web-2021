import React from 'react';
import { render } from 'react-dom';
import Today from './components/Today';
import './style.css';

const App = () => (
  <div className="container">
    <Today day="04" month="05" year="2021" />
    <Today day="07" month="10" year="2021" />
    <Today day="13" month="07" year="2021" />
  </div>
);

render(<App />, document.querySelector('#app'));
