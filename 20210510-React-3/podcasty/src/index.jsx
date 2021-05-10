import React from 'react';
import { render } from 'react-dom';
import Episode from './Episode';
import { episodes } from './data';
import './style.css';

const App = () => (
  <div className="episodes-list">
    {episodes.map((episode) => (
      <Episode
        key={episode.num}
        num={episode.num}
        title={episode.title}
        guest={episode.title}
      />
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
