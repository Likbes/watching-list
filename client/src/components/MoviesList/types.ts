import { Movie } from '../../global/types';

export interface IProps {
  data: {
    loading?: boolean,
    movies: Movie[] | undefined,
    error?: any
  },
}

export type Response = {
  movies: Movie,
};
