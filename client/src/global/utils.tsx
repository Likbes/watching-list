import React from 'react';
import { Movie } from './types';

export const renderMovies = (movies: Movie[] | undefined, handleClick?: (id: string) => void) => {
  return (
    movies && movies.map(({ name, id }) => (
      <li
        key={name}
        onClick={() => {
          if (handleClick) handleClick(id)
        }}
      > {name} </li>
    ))
  );
}
