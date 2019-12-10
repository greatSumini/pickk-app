import 'isomorphic-fetch';
import ApolloClient from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {onError} from 'apollo-link-error';
import {ApolloLink} from 'apollo-link';
import {createUploadLink} from 'apollo-upload-client';

const cache = new InMemoryCache();
const serverUri = process.env.API_HOST;

const uploadLink = createUploadLink({
  uri: serverUri,
  credentials: 'same-origin',
  fetch: fetch,
});

const errorLink = onError(({graphQLErrors}) => {
  if (graphQLErrors) {
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
  cache: cache,
  link: ApolloLink.from([ApolloLink.from([errorLink, authLink]), uploadLink]),
});
