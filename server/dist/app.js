"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }).then(() => {
    console.log("Connected to Database");
}).catch((err) => {
    console.log("Not Connected to Database ERROR! ", err);
});
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true,
// }));
const dbConnection = mongoose.connection;
dbConnection.on('error', (err) => console.log(`Connection error ${err}`));
dbConnection.once('open', () => console.log('Connection open'));
// app.listen(PORT, (err: string) => {
//   err ? console.log(err) : console.log('Server started');
// });
const graphql_yoga_1 = require("graphql-yoga");
require("reflect-metadata");
const type_graphql_1 = require("type-graphql");
const DirectorResolver_1 = __importDefault(require("./resolvers/DirectorResolver"));
const MovieResolver_1 = __importDefault(require("./resolvers/MovieResolver"));
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = yield type_graphql_1.buildSchema({
            resolvers: [MovieResolver_1.default, DirectorResolver_1.default],
            emitSchemaFile: true,
        });
        const server = new graphql_yoga_1.GraphQLServer({
            schema,
        });
        server.start({ port: 8080 });
    });
}
bootstrap();
