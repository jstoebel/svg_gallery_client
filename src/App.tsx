import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo'
import { ApolloProvider as ApolloHooksProvider } from 'react-apollo-hooks';
import apolloClient from './graphql/client'
// import Upload from './components/Upload'
import Drawer from './components/drawer/index'
import Images from './components/images/Images'

class App extends Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <ApolloHooksProvider client={apolloClient}>
          <Drawer />
          <Images />
        </ApolloHooksProvider>
      </ApolloProvider>
    );
  }
}

export default App;
