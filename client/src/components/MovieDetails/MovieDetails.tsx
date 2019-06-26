import React from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom';

import { IProps, Response, Variables } from './types';
import { getMovieQuery } from './queries';
import { renderMovies } from '../../global/utils';
import styles from './MovieDetails.module.scss';

const MovieDetails: React.FC<IProps> = ({ data: { loading, movie, error } }) => {

  if (loading) return (
    <p className={styles.movieDetails}>Loading...</p>
  );

  if (error) return (
    <p className={styles.error}>Something went wrong</p>
  );

  const { name, genre, director } = movie;

  return (
    <div className={styles.movieDetails}>
      {
        <>
          <h2 className={styles.name}>{name}</h2>
          <p><span>Genre:</span> {genre}</p>
          <p><span>Director:</span> {director.name}</p>
          <p>All movies by this director: </p>
          {renderMovies(director.movies)}
          <Link to="/" className="link home">Home</Link>
        </>
      }
    </div>
  );
};

const withQuery = graphql<IProps, Response, Variables, {}>(getMovieQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.match.params.id
      },
    };
  },
});

export default withQuery(MovieDetails);
