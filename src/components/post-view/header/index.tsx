import React from 'react';
import styled from 'styled-components/native';

import HeaderThumbnail from './thumbnail';
import HeaderTitle from './title';
import ProfileNode from '@src/modules/molecules/buttons/profile-node';

export default function PostViewHeader() {
  return (
    <Wrapper>
      <HeaderThumbnail />
      <HeaderTitle />
      <ProfileNode />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
});
