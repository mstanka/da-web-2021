import React from 'react';
import './style.css';

const Header = ({ user }) => {
  return (
    <header>
      <div className="topbar container">
        <div className="topbar__brand">
          <div className="logo"></div>
          <div className="company">Mejlík.cz</div>
        </div>

        <div className="user">
          {!user ? (
            <div className="login">Přihlásit se</div>
          ) : (
            <>
              <div className="user__name">{user}</div>
              <div className="user__icon"></div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
