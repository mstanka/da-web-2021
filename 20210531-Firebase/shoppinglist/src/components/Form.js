import React, { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../db';

const Form = () => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault;

    db.collection('list').add({
      name: itemName,
      creationDate: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{' '}
        <input value={itemName} onChange={(e) => setItemName(e.target.value)} />
      </label>{' '}
      <button>Add</button>
    </form>
  );
};

export default Form;
