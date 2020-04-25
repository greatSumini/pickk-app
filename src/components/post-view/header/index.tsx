import React from 'react';
import styled from 'styled-components/native';

import HeaderThumbnail, {PostViewThumbnailProps} from './thumbnail';
import HeaderTitle, {PostViewTitleProps} from './title';
import ProfileNode, {
  ProfileNodeProps,
} from '@src/modules/molecules/button/profile-node';

import rem from '@src/constants/rem';

export type PostViewHeaderProps = PostViewThumbnailProps &
  PostViewTitleProps &
  ProfileNodeProps;

export default function PostViewHeader(props: PostViewHeaderProps) {
  return (
    <Wrapper>
      <HeaderThumbnail {...(props as PostViewThumbnailProps)} />
      <HeaderTitle {...(props as PostViewTitleProps)} />
      <ProfileNode {...(props as ProfileNodeProps)} />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  paddingBottom: rem(12),
  borderBottomWidth: rem(4),
  borderBottomColor: '#E7E7E7',
});
