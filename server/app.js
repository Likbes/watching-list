const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');

const app = express();
const PORT = 3005;

require('dotenv').config();

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI,
  { useNewUrlParser: true }
).then(() => {
  console.log("Connected to Database");
}).catch((err) => {
  console.log("Not Connected to Database ERROR! ", err);
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log(`Connection error ${err}`));
dbConnection.once('open', () => console.log('Connection open'));

app.listen(PORT, err => {
  err ? console.log(err) : console.log('Server started');
});
