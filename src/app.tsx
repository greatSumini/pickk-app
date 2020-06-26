import React from 'react';
import styled from 'styled-components/native';

import Navigator from './modules/navigation/navigator';
import {useOnesignalNotification} from './hooks';

export default function App() {
  useOnesignalNotification();

  return (
    <Container>
      <Navigator />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
