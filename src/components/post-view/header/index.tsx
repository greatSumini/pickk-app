import React from 'react';
import styled from 'styled-components/native';

import HeaderThumbnail from './thumbnail';
import HeaderTitle from './title';
import PostViewHeaderProps from './props';
import ProfileNode from '@src/modules/molecules/buttons/profile-node';

export default function PostViewHeader(props: PostViewHeaderProps) {
  return (
    <Wrapper>
      <HeaderThumbnail {...props} />
      <HeaderTitle />
      <ProfileNode />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
});
