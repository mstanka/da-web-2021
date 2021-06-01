import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../db';
import styles from './shoppinglist.module.css';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return db
      .collection('list')
      .orderBy('creationDate')
      .onSnapshot((querySnapshot) => {
        setItems(
          querySnapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            return data;
          }),
        );
      });
  }, []);

  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <li key={item.id} className={styles.item}>
          {' '}
          <input
            type="checkbox"
            checked={item.checked}
            onChange={(e) => {
              setChecked(() => !checked);
              setChecked(
                db.collection('list').doc(item.id).update({
                  checked: e.target.checked,
                }),
              );
            }}
          />
          <Link to={`/detail/${item.id}`} className={styles.link}>
            {item.name}
          </Link>{' '}
          <button
            className={styles.btn}
            onClick={() => {
              db.collection('list').doc(item.id).delete();
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShoppingList;
