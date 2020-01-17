import React from 'react';
import styled from 'styled-components/native';

import ScrollList from '@src/modules/list/scroll';
import Header from './header';
import NavigationBar from './navigation-bar';
import Filter from './filter';

export default function Channel(props) {
  const id = 148;

  return (
    <Wrapper>
      <Header id={id} navigation={props.navigation} />
      <NavigationBar />
      <Filter />
      {/* <ScrollList /> */}
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView({flex: 1});
