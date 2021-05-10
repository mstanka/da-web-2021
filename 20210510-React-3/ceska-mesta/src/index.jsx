import React from 'react';
import { render } from 'react-dom';
import City from './City';
import './style.css';
import { cities } from './cz-cities';

const App = () => (
  <div className="container">
    {cities.map((city) => (
      <City
        key={city.name}
        name={city.name}
        population={city.population}
        area={city.area}
        district={city.district}
        photo={city.photo}
      />
    ))}
  </div>
);

render(<App />, document.querySelector('#app'));
