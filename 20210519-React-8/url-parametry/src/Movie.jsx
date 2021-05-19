import React from 'react';
import { useParams } from 'react-router-dom';
import movies from './movies';

const Movie = () => {
  const { id } = useParams();
  const currentMovie = movies.find((movie) => movie.id === id);

  return (
    <div className="movie">
      <h1>{currentMovie.title}</h1>
      <p>{currentMovie.description}</p>
      <img src={currentMovie.img} alt={currentMovie.title} />
    </div>
  );
};

export default Movie;
