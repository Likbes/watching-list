import { Movie } from '../../global/types';

export interface IProps {
  data: {
    loading?: boolean,
    movie: Movie,
    error?: any
  },
  movieId: string | undefined
}

export type InputProps = {
  movieId: string | undefined
}

export type Response = {
  movie: Movie,
};
