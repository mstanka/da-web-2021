import React from 'react';

const Header = ({ title }) => {
  return (
    <header>
      <div className="logo"></div>
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
