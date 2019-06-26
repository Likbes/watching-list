import { gql } from 'apollo-boost';

export const getDirectorsQuery = gql`
  query {
    directors {
      name,
      id
    }
  }
`;

export const addMovieMutation = gql`
  mutation addMovieMutation($name: String!, $genre: String!, $directorId: ID!) {
    addMovie(name: $name, genre: $genre, directorId: $directorId) {
      name,
      genre,
      directorId
    }
  }
`;
