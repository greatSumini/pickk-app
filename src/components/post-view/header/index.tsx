import React from 'react';
import styled from 'styled-components/native';

import HeaderThumbnail, {PostViewThumbnailProps} from './thumbnail';
import HeaderTitle, {PostViewTitleProps} from './title';
import ProfileNode from '@src/modules/molecules/button/profile-node';

export type PostViewHeaderProps = PostViewThumbnailProps & PostViewTitleProps;

export default function PostViewHeader(props: PostViewHeaderProps) {
  return (
    <Wrapper>
      <HeaderThumbnail {...(props as PostViewThumbnailProps)} />
      <HeaderTitle {...(props as PostViewTitleProps)} />
      <ProfileNode />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
});
