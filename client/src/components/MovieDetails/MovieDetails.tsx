import React from 'react';
import { graphql } from 'react-apollo';

import { InputProps, IProps, Response } from './types';
import { getMovieQuery } from './queries';
import { renderMovies } from '../../global/utils';
import styles from './MovieDetails.module.scss';

const MovieDetails: React.FC<IProps> = ({ data: { loading, movie, error }, movieId }) => {

  if (loading || !movie) return (
    <p className={styles.movieDetails}>No movie selected...</p>
  );

  if (error) return (
    <p className={styles.error}>Something went wrong</p>
  );

  const { name, genre, director } = movie;

  return (
    <div className={styles.movieDetails}>
      <p>Output details: </p>
      {
        movie &&
        <>
          <h2>{name}</h2>
          <p>{genre}</p>
          <p>{director.name}</p>
          <p>All movies by this director: {renderMovies(director.movies)}</p>
        </>
      }
    </div>
  );
};

const withQuery = graphql<InputProps, Response, {}, IProps>(getMovieQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.movieId
      },
    };
  },
});

export default withQuery(MovieDetails);
