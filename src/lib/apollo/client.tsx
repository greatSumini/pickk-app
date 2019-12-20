import ApolloClient from 'apollo-client';

import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {onError} from 'apollo-link-error';
import {createUploadLink} from 'apollo-upload-client';
import 'isomorphic-fetch';

import Config from 'react-native-config';

const cache = new InMemoryCache();
const serverUri = Config.API_HOST;

const uploadLink = createUploadLink({
  uri: serverUri,
  credentials: 'same-origin',
  fetch,
});

const errorLink = onError(({graphQLErrors}) => {
  if (graphQLErrors) {
    // tslint:disable-next-line: no-console
    graphQLErrors.map(({message}) => console.log(message));
  }
});

const authLink = setContext((_, {headers}) => {
  return {
    headers: {
      ...headers,
      authorizationtoken: 'suminToken',
      authorizationuserid: 'suminId',
    },
  };
});

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([ApolloLink.from([errorLink, authLink]), uploadLink]),
});
