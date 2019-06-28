import React from 'react';
import { graphql } from 'react-apollo';

import { IProps, Response } from './types';
import { getMoviesQuery } from './queries';
import { renderMovies } from '../../global/utils';
import styles from './MoviesList.module.scss';

export const MoviesList: React.FC<IProps> = (({ data: { loading, movies, error } }) => {

  if (loading) return (
    <p className={styles.moviesList}>Loading...</p>
  );

  if (error) return (
    <p className={styles.error}>Something went wrong</p>
  );

  return (
    <>
      <h1>Likbes' Watching List</h1>
      <div className={styles.moviesList}>
        <ul>{renderMovies(movies)}</ul>
      </div>
    </>
  );
});

const withQuery = graphql<IProps, Response, {}, {}>(getMoviesQuery);

export default withQuery(MoviesList);
