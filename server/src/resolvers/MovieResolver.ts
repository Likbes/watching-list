import { Arg, ID, FieldResolver, Query, Mutation, Resolver, Root } from "type-graphql";
import { MovieData } from '../types';

import MoviesModel from '../models/movie';
import DirectorModel from '../models/director';

import Movie from '../schemas/Movie';

@Resolver(of => Movie)
export default class {
  @Query(returns => Movie)
  movie(@Arg("id") id: string): MovieData | any {
    return MoviesModel.findById(id);
  }

  @Query(returns => [Movie])
  movies(): MovieData[] | any {
    return MoviesModel.find({});
  }

  @Mutation(returns => Movie)
  addMovie(
    @Arg("name") name: string,
    @Arg("genre") genre: string,
    @Arg("directorId") directorId: string,
  ) {
    const movie = new MoviesModel({
      name, genre, directorId
    });
    return movie.save();
  }

  @FieldResolver()
  director(@Root() movie: MovieData) {
    return DirectorModel.findById(movie.directorId);
  }
}
