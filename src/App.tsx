import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import apolloClient from './graphql/client'
import Upload from './components/Upload'
import Images from './components/images/Images'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <Upload />
          <Images />
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
