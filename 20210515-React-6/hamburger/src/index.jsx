import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const MenuItem = ({ text, onSelect }) => {
  const handleClick = () => onSelect(text);

  return (
    <a href="#" className="menu-item" onClick={handleClick}>
      {text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

  const menuHandler = () => {
    setMenuOpened(true);
  };

  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page);
  };

  return (
    <>
      <header>
        <div className={menuOpened ? 'menu' : 'menu menu--closed'}>
          <button className="menu__btn" onClick={menuHandler}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));
