export type Movie = {
  name: string,
  genre: string,
  id: string,
  directorId: string,
  director: Director
};

export type Director = {
  name: string,
  age: number,
  id: string,
  movies: Movie[]
}
