import React from 'react';
import './style.css';

const Today = ({ day, month, year }) => {
  return (
    <div>
      <span className="day">{day}.</span>
      <span className="month">{month}.</span>
      <span className="year">{year}</span>
    </div>
  );
};

export default Today;
