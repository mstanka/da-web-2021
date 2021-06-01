import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../db';
import styles from './detail.module.css';

const Detail = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    return db
      .collection('list')
      .doc(id)
      .onSnapshot((doc) => {
        setItem(doc.data());
      });
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {!item ? (
        <p>Loading....</p>
      ) : (
        <>
          <h3>Item detail</h3>
          <h1 className={styles.item}>{item.name}</h1>
          <div className={styles.date}>
            Creation date: {item.creationDate.toDate().toLocaleString()}
          </div>
          <Link to="/" className={styles.link}>
            Back to ShoppingList &#8702;
          </Link>{' '}
        </>
      )}
    </div>
  );
};

export default Detail;
