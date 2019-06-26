import { Arg, FieldResolver, Query, Mutation, Resolver, Root } from "type-graphql";
import { DirectorData } from '../types';

import MoviesModel from '../models/movie';
import DirectorsModel from '../models/director';

import Director from '../schemas/Director';

@Resolver(of => Director)
export default class {
  @Query(returns => Director)
  director(@Arg("id") id: string): DirectorData | any {
    return DirectorsModel.findById(id);
  }

  @Query(returns => [Director])
  directors(): DirectorData[] | any {
    return DirectorsModel.find({});
  }

  @Mutation(returns => Director)
  addDirector(
    @Arg("name") name: string,
    @Arg("genre") genre: string,
  ) {
    const director = new DirectorsModel({
      name, genre
    });

    return director.save();
  }

  @FieldResolver()
  movies(@Root() director: DirectorData) {
    return MoviesModel.find({ directorId: director.id });
  }
}
