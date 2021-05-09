import React from 'react';
import { render } from 'react-dom';
import Bulb from './Bulb';
import './style.css';

const App = () => {
  return (
    <div className="container">
      <Bulb on={true} />;
      <Bulb on={true} />;
      <Bulb on={false} />;
      <Bulb on={false} />;
    </div>
  );
};

render(<App />, document.querySelector('#app'));
