import React from 'react';
import './style.css';

const City = ({ name, population, area, district, photo }) => (
  <div className="city">
    <div>
      Jmeno mesta: <span>{name}</span>
    </div>
    <div>
      Pocet obyvatel: <span>{population}</span>
    </div>
    <div>
      Rozloha: <span>{area}</span>
    </div>
    <div>
      <span> {district}</span>
    </div>
    <div className="photo">
      <img src={photo} />
    </div>
  </div>
);

export default City;
