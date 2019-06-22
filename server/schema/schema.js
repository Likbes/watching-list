const graphql = require('graphql');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = graphql;

const movies = [
  { id: '1', name: 'Pilp fiction', genre: 'Crime', directorId: 1 },
  { id: '2', name: '1984', genre: 'Sci-Fi', directorId: 2 },
  { id: 3, name: 'V for vendetta', genre: 'Sci-Fi-Triller', directorId: 3 },
  { id: 4, name: 'Snatch', genre: 'Crime-Comedy', directorId: 4 },
  { id: '5', name: 'The Hateful Eight', genre: 'Crime', directorId: 1 },
  { id: '6', name: 'Reservoir Dogs', genre: 'Sci-Fi', directorId: 1 },
  { id: '7', name: 'Inglourious Basterds', genre: 'Crime', directorId: 1 },
  { id: '8', name: 'Lock', genre: 'Sci-Fi', directorId: 4 },
];

const directors = [
  { id: '1', name: 'Quentim Tarantino', age: 55, },
  { id: '2', name: 'Michael Radford', age: 72, },
  { id: 3, name: 'James McTeigue', age: 51, },
  { id: 4, name: 'Guy Ritchie', age: 50, },
];

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    directorId: { type: GraphQLID },
    director: {
      type: DirectorType,
      resolve(parent, args) {
        return directors.find(d => d.id == parent.directorId);
      }
    },
  }),
});

const DirectorType = new GraphQLObjectType({
  name: 'Director',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    movies: {
      type: GraphQLList(MovieType),
      resolve(parent, args) {
        return movies.filter(m => m.directorId == parent.id);
      },
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    movie: {
      type: MovieType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return movies.find(m => m.id == args.id);
      },
    },
    director: {
      type: DirectorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return directors.find(d => d.id == args.id);
      },
    },
    movies: {
      type: new GraphQLList(MovieType),
      resolve(parent, args) {
        return movies;
      },
    },
    directors: {
      type: new GraphQLList(DirectorType),
      resolve(parent, args) {
        return directors;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: Query,
});