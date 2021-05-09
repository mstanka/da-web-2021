import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import '../../style.css';

const App = () => {
  return (
    <div className="container">
      <Header title="Webová aplikace" />
      <Main content="Startovací šablona pro webovou aplikaci v Reactu. Vytvořeno pomocí" />
      <Footer author="Martin Podloucky" />
    </div>
  );
};

export default App;
