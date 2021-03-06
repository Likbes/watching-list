"use strict";
// const graphql = require('graphql');
// const {
//   GraphQLObjectType,
//   GraphQLString,
//   GraphQLInt,
//   GraphQLID,
//   GraphQLNonNull,
//   GraphQLSchema,
//   GraphQLList,
// } = graphql;
// const Movies = require('../models/movie');
// const Directors = require('../models/director');
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
// const Mutation = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: {
//     addDirector: {
//       type: DirectorType,
//       args: {
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         age: { type: new GraphQLNonNull(GraphQLInt) },
//       },
//       resolve(parent, { name, age }) {
//         const director = new Directors({
//           name, age
//         });
//         return director.save();
//       },
//     },
//     addMovie: {
//       type: MovieType,
//       args: {
//         name: { type: new GraphQLNonNull(GraphQLString) },
//         genre: { type: new GraphQLNonNull(GraphQLString) },
//         directorId: { type: new GraphQLNonNull(GraphQLID) },
//       },
//       resolve(parent, { name, genre, directorId }) {
//         const movie = new Movies({
//           name, genre, directorId
//         });
//         return movie.save();
//       },
//     },
//   },
// });
// const Query = new GraphQLObjectType({
//   name: 'Query',
//   fields: {
//     movie: {
//       type: MovieType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         // return movies.find(m => m.id == args.id);
//         return Movies.findById(args.id);
//       },
//     },
//     director: {
//       type: DirectorType,
//       args: { id: { type: GraphQLID } },
//       resolve(parent, args) {
//         // return directors.find(d => d.id == args.id);
//         return Directors.findById(args.id);
//       },
//     },
//     movies: {
//       type: new GraphQLList(MovieType),
//       resolve(parent, args) {
//         // return movies;
//         return Movies.find({});
//       },
//     },
//     directors: {
//       type: new GraphQLList(DirectorType),
//       resolve(parent, args) {
//         // return directors;
//         return Directors.find({});
//       },
//     },
//   },
// });
// module.exports = new GraphQLSchema({
//   query: Query,
//   mutation: Mutation,
// });
