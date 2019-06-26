import { Movie } from '../../global/types';

export interface IProps {
  data: {
    loading?: boolean,
    movie: Movie,
    error?: any
  },
  match: {
    params: {
      id: string
    }
  }
};

export type Variables = {
  id: string | undefined;
};

export type Response = {
  movie: Movie,
};
