import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import apolloClient from './graphql/client'
import Upload from './components/Upload'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Upload />
      </ApolloProvider>
    );
  }
}

export default App;
