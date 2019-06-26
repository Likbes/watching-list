import { gql } from 'apollo-boost';

export const getMovieQuery = gql`
  query getMovieDetails($id: String!) {
    movie(id: $id) {
      id,
      name,
      genre,
      directorId,
      director {
        name,
        age,
        movies {
          name,
          id
        }
      }
    }
  }
`;
