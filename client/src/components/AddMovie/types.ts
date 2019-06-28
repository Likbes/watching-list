import { ChangeEvent, FormEvent } from 'react';
import { Director } from '../../global/types';

export interface IProps {
  getDirectorQuery: Data,
  addMovieMutation: (variables: object) => void
}

export interface IState {
  name: string,
  genre: string,
  directorId: string,
  error: string
}

export interface FormProps {
  name?: string,
  genre?: string,
  error?: any,
  displayDirectors?: () => JSX.Element | JSX.Element[] | undefined,
  handleChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void,
  handleSubmit?: (e: FormEvent) => void
}

export type Response = {
  directors: Director[],
}

type Data = {
  loading?: boolean,
  error?: any,
  directors?: Director[],
}
