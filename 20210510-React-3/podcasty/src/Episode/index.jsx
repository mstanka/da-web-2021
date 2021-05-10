import React from 'react';
import './style.css';

const Episode = ({ num, title, guest }) => (
  <div className="episode">
    <div className="episode__num">{num}</div>
    <div className="episode__body">
      <div className="episode__title">{title}</div>
      <div className="episode__guest">host: {guest}</div>
    </div>
  </div>
);

export default Episode;
