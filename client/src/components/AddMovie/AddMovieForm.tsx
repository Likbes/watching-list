import React from 'react';
import { FormProps } from './types';
import styles from './AddMovieForm.module.scss'

const AddMovieForm: React.FC<FormProps> = ({
  name,
  genre,
  error,
  displayDirectors,
  handleChange,
  handleSubmit,
}) => {
  return (
    <form
      className={styles.addMovie}
      onSubmit={handleSubmit}
    >
      <ul className={styles.fields}>
        <li className={styles.field}>
          <label htmlFor="name">Movie name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => handleChange(e)}
          />
        </li>
        <li className={styles.field}>
          <label htmlFor="genre">Genre: </label>
          <input
            type="text"
            name="genre"
            value={genre}
            onChange={e => handleChange(e)}
          />
        </li>
        <li className={styles.field}>
          <label htmlFor="directorId">Director: </label>
          <select
            name="directorId"
            id="directorId"
            onChange={e => handleChange(e)}
          >
            <option>Select director</option>
            {displayDirectors()}
          </select>
        </li>
      </ul>
      <button
        type="submit"
        className={styles.addButton}
      >+</button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};

export default AddMovieForm
