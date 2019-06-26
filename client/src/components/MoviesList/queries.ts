import { gql } from 'apollo-boost';

export const getMoviesQuery = gql`
  {
    movies {
      name,
      genre,
      id
    }
  }
`;
