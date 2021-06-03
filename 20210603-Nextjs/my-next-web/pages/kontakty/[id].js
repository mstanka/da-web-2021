import React from 'react';
import { getKontakty } from '../../lib/kontakty';
import styles from '../../styles/Kontakty.module.css';

const seznamKontaktu = getKontakty();

const Kontakt = ({ kontakt }) => {
  return (
    <React.Fragment>
      <img
        src={`/kontakty/${kontakt.id}.jpg`}
        width="400"
        height="400"
        alt={kontakt.jmeno}
        className={styles.photo}
      />
      <h1>{kontakt.jmeno}</h1>
      <h2>{kontakt.funkce}</h2>
      <p>{kontakt.text}</p>
    </React.Fragment>
  );
};

export const getStaticPaths = () => {
  const kontaktyPaths = seznamKontaktu.map((kontakt) => {
    return {
      params: {
        id: kontakt.id,
      },
    };
  });

  return {
    paths: kontaktyPaths,
    fallback: false,
  };
};

export const getStaticProps = ({ params }) => {
  return {
    props: {
      kontakt: seznamKontaktu.find((kontakt) => kontakt.id === params.id),
    },
  };
};
export default Kontakt;
