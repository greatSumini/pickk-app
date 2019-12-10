import React from 'react';
import styled from 'styled-components/native';

import {ApolloProvider} from 'react-apollo';
import {client} from './lib/apollo/client';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Container>Hello world</Container>
    </ApolloProvider>
  );
}

const Container = styled.Text`
  font-size: 100;
`;
