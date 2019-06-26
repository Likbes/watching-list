import { Field, Int, ObjectType } from "type-graphql";
import Movie from './Movie';

// const DirectorType = new GraphQLObjectType({
//   name: 'Director',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     movies: {
//       type: GraphQLList(MovieType),
//       resolve(parent, args) {
//         // return movies.filter(m => m.directorId == parent.id);
//         return Movies.find({ directorId: parent.id });
//       },
//     },
//   }),
// });

@ObjectType()
export default class Director {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field(type => Int)
  age: number;

  @Field()
  directorId: string;

  @Field(type => [Movie])
  movies: Movie[];

}
