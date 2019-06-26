import React from 'react';
import ApolloClient from 'apollo-boost';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';

import MoviesList from '../MoviesList';
import AddMovie from '../AddMovie';
import styles from './App.module.scss';
import MovieDetails from '../MovieDetails';

// apollo client setup
const client = new ApolloClient({
  uri: 'http://localhost:3005/graphql',
});

const App: React.FC = () => {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className={styles.app}>
          <Route path="/" component={MoviesList} exact />
          <Route path="/" component={AddMovie} exact />
          <Route path="/:id" component={MovieDetails} exact />
        </div>
      </ApolloProvider>
    </Router>
  );
}

export default App;
