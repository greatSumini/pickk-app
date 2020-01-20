import React from 'react';
import styled from 'styled-components/native';

import SearchScreenProps from './props';
import Header from './header';

export default function Search(props: SearchScreenProps) {
  return (
    <Wrapper>
      <Header navigation={props.navigation} />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
});
