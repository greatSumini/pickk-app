import React from 'react';
import styled from 'styled-components/native';

import Navigator from './modules/navigation/navigator';
import {useOnesignalNotification} from './hooks';
import {withAppContext} from './context/app';
import {withStoreContext} from './context/store';

function App() {
  useOnesignalNotification();

  return (
    <Container>
      <Navigator />
    </Container>
  );
}

export default withAppContext(withStoreContext(App));

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #fff;
`;
