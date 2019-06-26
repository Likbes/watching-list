// const express = require('express');
const mongoose = require('mongoose');
// const cors = require('cors');

// const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema');

// const app = express();
// const PORT = 3005;

require('dotenv').config();

// app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
).then(() => {
  console.log("Connected to Database");
}).catch((err: string) => {
  console.log("Not Connected to Database ERROR! ", err);
});

// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true,
// }));

const dbConnection = mongoose.connection;
dbConnection.on('error', (err: string) => console.log(`Connection error ${err}`));
dbConnection.once('open', () => console.log('Connection open'));

// app.listen(PORT, (err: string) => {
//   err ? console.log(err) : console.log('Server started');
// });

import { GraphQLServer } from "graphql-yoga";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import DirectorResolver from "./resolvers/DirectorResolver";
import MovieResolver from "./resolvers/MovieResolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [MovieResolver, DirectorResolver],
    emitSchemaFile: true,
  });

  const server = new GraphQLServer({
    schema,
  });

  server.start({ port: 8080 });
}

bootstrap();
