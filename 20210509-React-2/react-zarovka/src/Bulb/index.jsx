import React from 'react';
import './style.css';

const Bulb = ({ on }) => {
  const bulbClass = on === true ? 'bulb bulb--on' : 'bulb';

  return <div className={bulbClass}></div>;
};

export default Bulb;
