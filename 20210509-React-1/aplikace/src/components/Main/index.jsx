import React from 'react';

const Main = ({ content }) => {
  return (
    <main>
      <p>
        {content}{' '}
        <a href="https://www.npmjs.com/package/create-czechitas-app">
          create-czechitas-app
        </a>
      </p>
    </main>
  );
};

export default Main;
