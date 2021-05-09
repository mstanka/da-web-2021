import React from 'react';

const Footer = ({ author }) => {
  return (
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
      <p>{author}</p>
    </footer>
  );
};

export default Footer;
