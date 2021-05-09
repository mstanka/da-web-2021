import React from 'react';
import './style.css';

const Inbox = ({ account, messages }) => {
  return (
    <>
      <p className="account">{account}</p>
      <p
        className="messages"
        style={{ color: messages === 0 ? 'red' : 'black' }}
      >
        {messages === 0
          ? 'Zadne nove zpravy'
          : `Neprectenych zprav: ${messages}`}
      </p>
    </>
  );
};

export default Inbox;
