import React, { useState } from 'react';
import firebase from 'firebase/app';
import { db } from '../db';
import styles from './form.module.css';

const Form = () => {
  const [itemName, setItemName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setItemName(
      db.collection('list').add({
        name: itemName,
        creationDate: firebase.firestore.FieldValue.serverTimestamp(),
        checked: false,
      }),
    );
    setItemName('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name:{' '}
        <input
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          className={styles.input}
        />
      </label>{' '}
      <button className={styles.btn}>Add</button>
    </form>
  );
};

export default Form;
