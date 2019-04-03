import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createUploadLink } from 'apollo-upload-client'

const client = new ApolloClient({
  ssrMode: true,
  cache: new InMemoryCache(),
  link: createUploadLink({ uri: process.env.REACT_APP_API_URI })
})
export default client;