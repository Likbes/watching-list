import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import MoviesList from '../MoviesList';
import AddMovie from '../AddMovie';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Likbes' Watching List</h1>
        <MoviesList />
        <AddMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;
