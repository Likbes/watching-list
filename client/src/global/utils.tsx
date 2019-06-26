import React from 'react';
import { Link } from 'react-router-dom';
import { Movie } from './types';

export const renderMovies = (movies: Movie[] | undefined) => {
  return (
    movies && movies.map(({ name, id }) => (
      <Link
        key={name}
        to={`/${id}`}
        className="link"
      > {name} </Link>
    ))
  );
}
