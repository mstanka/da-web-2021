import React, { useState } from 'react';
import { db } from '../db';
import firebase from 'firebase/app';

const Form = () => {
  const [filmName, setFilmName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection('films').add({
      name: filmName,
      dateCreation: firebase.firestore.FieldValue.serverTimestamp(),
      favorite: 0,
    });
    setFilmName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Film name:{' '}
        <input value={filmName} onChange={(e) => setFilmName(e.target.value)} />
      </label>{' '}
      <button>Add film</button>
    </form>
  );
};

export default Form;
