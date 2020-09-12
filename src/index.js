import React from 'react';
import ReactDOM from 'react-dom';
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

import App from './App';

import { Provider as ContextProvider } from './Context';

const httpLink = createHttpLink({
  uri: 'https://petsgram-server-mappedev-339gmifsh.vercel.app/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = sessionStorage.getItem('token') || false;

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const errorLink = onError(({ networkError }) => {
  if (networkError && networkError.result.code === 'invalid_token') {
    sessionStorage.removeItem('token');
    location.href = '/';
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([errorLink, authLink, httpLink]),
});

ReactDOM.render(
  <ContextProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </ContextProvider>,
  document.getElementById('app')
);
