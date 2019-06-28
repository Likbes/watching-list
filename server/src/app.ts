import { GraphQLServer } from "graphql-yoga";
import mongoose from 'mongoose';
import "reflect-metadata";
import { buildSchema } from "type-graphql";

import DirectorResolver from "./resolvers/DirectorResolver";
import MovieResolver from "./resolvers/MovieResolver";

import dotenv from 'dotenv';
dotenv.config();

declare class process {
  static env: { MONGODB_URI: string }
}

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

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
).then(() => {
  console.log("Connected to Database");
}).catch((err: string) => {
  console.log("Not Connected to Database ERROR! ", err);
});

const dbConnection = mongoose.connection;
dbConnection.on('error', (err: string) => console.log(`Connection error ${err}`));
dbConnection.once('open', () => console.log('Connection open'));

bootstrap();
