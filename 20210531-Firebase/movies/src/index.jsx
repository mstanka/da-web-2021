import React from 'react';
import { render } from 'react-dom';
import List from './components/List';
import Form from './components/Form';
import './style.css';

const App = () => (
  <div className="container">
    <h1>Films</h1>
    <List />
    <Form />
  </div>
);

render(<App />, document.querySelector('#app'));
