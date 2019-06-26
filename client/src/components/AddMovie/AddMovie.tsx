import React, { Component, ChangeEvent, FormEvent } from "react";
import { graphql, compose, ChildProps } from 'react-apollo';

import AddMovieForm from './AddMovieForm';
import { IProps, IState, Response } from './types';
import { getDirectorsQuery, addMovieMutation } from './queries';
import { getMoviesQuery } from '../MoviesList/queries';

class AddMovie extends Component<ChildProps<IProps, Response>, IState> {

  state = {
    name: '',
    genre: '',
    directorId: '',
    error: ''
  }

  resetState = () => {
    this.setState({
      name: '',
      genre: '',
      directorId: '',
      error: ''
    });
  }

  displayDirectors = () => {
    const { loading, directors, error } = this.props.getDirectorQuery;

    if (loading) return <option disabled>Loading...</option>;
    if (error) return <option>ERROR</option>;

    if (directors !== undefined)
      return directors.map(director => (
        <option
          key={director.id}
          value={director.id}
        >{director.name}</option>
      ));
  }

  validateForm = () => {
    let isValid = true;
    Object.values(this.state).forEach(v => {
      if (v === '') {
        isValid = false;
        this.setState({ error: 'Please fill all fields' });
      }
    });
    return isValid;
  }

  handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    } as Pick<IState, keyof IState>);
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!this.validateForm()) return;

    const { name, genre, directorId } = this.state;
    const variables = {
      name, genre, directorId
    };

    this.props.addMovieMutation({
      variables,
      refetchQueries: [{ query: getMoviesQuery }]
    });
    this.resetState();
  }

  public render() {
    const { name, genre, error } = this.state;

    return (
      <AddMovieForm
        name={name}
        genre={genre}
        error={error}
        displayDirectors={this.displayDirectors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const withData = compose(
  graphql<IProps, Response>(getDirectorsQuery, { name: 'getDirectorQuery' }),
  graphql<IProps, Response>(addMovieMutation, { name: 'addMovieMutation' })
);

export default withData(AddMovie);
