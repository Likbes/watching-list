import React, { useState } from 'react';
import { graphql } from 'react-apollo';

import MovieDetails from '../MovieDetails';

import { IProps, Response } from './types';
import { getMoviesQuery } from './queries';
import { renderMovies } from '../../global/utils';
import styles from './MoviesList.module.scss';

const MoviesList: React.FC<IProps> = (({ data: { loading, movies, error } }) => {

  const [selected, updateSelectedMovie] = useState<string | undefined>(undefined);

  const handleClick = (id: string) => {
    updateSelectedMovie(id);
  };

  if (loading || !movies) return (
    <p className={styles.moviesList}>Loading...</p>
  );

  if (error) return (
    <p className={styles.error}>Something went wrong</p>
  );

  return (
    <div className={styles.moviesList}>
      <ul>{renderMovies(movies, handleClick)}</ul>
      <MovieDetails movieId={selected} />
    </div>
  );
});

const withQuery = graphql<{}, Response, {}, IProps>(getMoviesQuery);

export default withQuery(MoviesList);
