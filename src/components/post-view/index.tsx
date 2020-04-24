import React from 'react';
import styled from 'styled-components/native';
import {NavigationDrawerProp} from 'react-navigation-drawer';

import PostViewHeader from './header';

export type PostViewScreenProps = {
  navigation: NavigationDrawerProp;
};

export default function PostView(props: PostViewScreenProps) {
  return (
    <Wrapper>
      <PostViewHeader />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
});
