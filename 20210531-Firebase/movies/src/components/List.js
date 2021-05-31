import React, { useState, useEffect } from 'react';
import { db } from '../db';
import firebase from 'firebase/app';

const List = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const clean = db
      .collection('films')
      .orderBy('name')
      .onSnapshot((snapshot) => {
        setFilms(
          snapshot.docs.map((doc) => {
            const data = doc.data();
            data.id = doc.id;
            console.log(data);
            return data;
          }),
        );
      });
    return clean;
  }, []);

  return (
    <ul>
      {films.map((film) => (
        <li key={film.id}>
          {film.name} ({film.favorite}) {console.log(film.name)}
          <button
            onClick={() => {
              db.collection('films')
                .doc(film.id)
                .update({
                  favorite: firebase.firestore.FieldValue.increment(1),
                });
            }}
          >
            wish to watch
          </button>
          <button
            onClick={() => {
              db.collection('films')
                .doc(film.id)
                .update({
                  favorite: firebase.firestore.FieldValue.increment(-1),
                });
            }}
          >
            not interested
          </button>
          <button
            onClick={() => {
              db.collection('films').doc(film.id).delete();
            }}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
