import React from 'react';
import styled from 'styled-components/native';

import PostViewHeader from './header';
import PostViewScreenProps from './props';

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
