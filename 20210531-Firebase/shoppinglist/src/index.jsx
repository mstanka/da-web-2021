import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ShoppingList from './components/ShoppingList';
import Form from './components/Form';
import Detail from './components/Detail';
import './style.css';

const App = () => (
  <Router>
    <div className="container">
      <h1 className="title">Shopping List</h1>
      <Switch>
        <Route path="/detail/:id">
          <Detail />
        </Route>
        <Route path="/">
          <ShoppingList />
          <Form />
        </Route>
      </Switch>
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
