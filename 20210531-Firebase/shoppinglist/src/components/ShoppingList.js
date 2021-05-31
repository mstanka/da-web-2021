import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../db';

const ShoppingList = () => {
  const [items, setItems] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    return db.collection('list').onSnapshot((querySnapshot) => {
      setItems(
        querySnapshot.docs.map((doc) => {
          const data = doc.data();
          data.id = doc.id;
          return data;
        }),
      );
    });
  }, [items]);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {' '}
          <input
            type="checkbox"
            checked={item.checked}
            onChange={(e) => {
              e.preventDefault();
              setChecked(() => !checked);
              db.collection('list').doc(item.id).update({
                checked: e.target.checked,
              });
            }}
          />
          <Link to={`/detail/${item.id}`}>{item.name}</Link>
          {' '}
          <button
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
