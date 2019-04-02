import React, { Component } from 'react';

import { ApolloProvider } from 'react-apollo'

import apolloClient from './graphql/client'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default App;
