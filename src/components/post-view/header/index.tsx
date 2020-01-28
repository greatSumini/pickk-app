import React from 'react';
import styled from 'styled-components/native';

import HeaderThumbnail from './thumbnail';
import HeaderTitle from './title';
import PostViewHeaderProps from './props';
import HeaderThumbnailProps from './thumbnail/props';
import HeaderTitleProps from './title/props';
import ProfileNode from '@src/modules/molecules/buttons/profile-node';
import Line from '@src/modules/atoms/line';
import colors from '@src/constants/colors';
import Space from '@src/modules/atoms/space';

export default function PostViewHeader(props: PostViewHeaderProps) {
  const headerThumbnailProps: HeaderThumbnailProps = props;
  const headerTitleProps: HeaderTitleProps = props;

  return (
    <Wrapper>
      <HeaderThumbnail {...headerThumbnailProps} />
      <HeaderTitle {...headerTitleProps} />
      <ProfileNode accountId={props.accountId} />
      <Space level={1} />
      <Line level={1} style={{backgroundColor: colors.lightGrey}} />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
});
