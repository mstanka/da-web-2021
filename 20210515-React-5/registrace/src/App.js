import React, { useState, Fragment } from 'react';

const App = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká republika');
  const [checkbox, setCheckbox] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Registrován nový uživatel ${userName} ze země ${country}.`);
  };

  const handleName = (e) => {
    setUserName(e.target.value);
  };

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleCheckbox = (e) => {
    setCheckbox(e.target.value);
  };

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <label>
          Uživatelské jméno:
          <input type="text" value={userName} onChange={handleName} />
        </label>
        <br />
        <label>
          Země původu:
          <select onChange={handleCountry} value={country}>
            <option value="Chorvatsko">Chorvatsko</option>
            <option value="Česká republika">Česká republika</option>
            <option value="Polsko">Polsko</option>
            <option value="Slovenská republika">Slovenská republika</option>
          </select>
        </label>
        <br />
        <label>
          Souhlasím s obchodními podmínkami
          <input type="checkbox" value={checkbox} onChange={handleCheckbox} />
        </label>
        <br />
        <button
          type="submit"
          disabled={userName === '' || !checkbox ? true : false}
        >
          Registrovat
        </button>
      </form>
      {userName === '' && <div>Uživatelské jméno je povinný údaj</div>}
      {!checkbox && <div>Souhlas je povinný údaj</div>}
    </Fragment>
  );
};

export default App;
