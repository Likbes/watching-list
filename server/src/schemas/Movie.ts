import { Field, ObjectType, ID } from "type-graphql";
import Director from './Director';

// const MovieType = new GraphQLObjectType({
//   name: 'Movie',
//   fields: () => ({
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     genre: { type: GraphQLString },
//     directorId: { type: GraphQLID },
//     director: {
//       type: DirectorType,
//       resolve(parent, args) {
//         // return directors.find(d => d.id == parent.directorId);
//         return Directors.findById(parent.directorId);
//       }
//     },
//   }),
// });

@ObjectType()
export default class Movie {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  genre: string;

  @Field()
  directorId: string;

  @Field(type => Director)
  director: Director;

}
