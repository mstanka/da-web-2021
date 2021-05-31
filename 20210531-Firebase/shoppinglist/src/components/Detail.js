import React, { Fragment, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { db } from '../db';

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

  console.log(item);

  return (
    <Fragment>
      <h1>Detail</h1>
      <p>Id: {id}</p>
      <pre>{JSON.stringify(item, null, 2)}</pre>
      <Link to="/">Back to ShoppingList</Link>
    </Fragment>
  );
};

export default Detail;

/* {
  <h2>{item.name}</h2>
  <div>Creation date: {item.creationDate.toDate().toLocaleString()}</div>
} */
