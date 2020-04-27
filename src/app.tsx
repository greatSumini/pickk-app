import React from 'react';
import styled from 'styled-components/native';

import {ApolloProvider} from 'react-apollo';
import {client} from './lib/apollo/client';

import Navigator from './modules/navigation/navigator';
import {useOnesignalNotification} from './hooks';

export default function App() {
  useOnesignalNotification();

  return (
    <ApolloProvider client={client}>
      <Container>
        <Navigator />
      </Container>
    </ApolloProvider>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
