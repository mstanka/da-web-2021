import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Movie from './Movie';
import movies from './movies';
import './style.css';

const App = () => (
  <Router>
    <div className="container">
      <header>
        <div className="logo"></div>
      </header>
      <main>
        <h2>Movies!</h2>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>

        <Switch>
          <Route path="/movies/:id" children={<Movie />} />
        </Switch>
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  </Router>
);

render(<App />, document.querySelector('#app'));
