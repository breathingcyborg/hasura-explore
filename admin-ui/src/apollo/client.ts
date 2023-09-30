import { ApolloClient, HttpLink, InMemoryCache, from } from '@apollo/client';
import { errorLink } from './error-link';
import { authLink } from './auth-link';

const httpLink = new HttpLink({
  uri: process.env.REACT_APP_HASURA_GRAPHQL_URL
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, authLink, httpLink])
});

export default client;