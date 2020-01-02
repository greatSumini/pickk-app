import React from 'react';
import styled from 'styled-components/native';

import PostCardWideFooterProps from './props';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import View from '@src/assets/icons/view';
import ThumsUp from '@src/assets/icons/thums-up';
import Comment from '@src/assets/icons/comment';
import Space from '@src/modules/atoms/space';
import IconText from '@src/modules/molecules/icon-text';

const iconSize = rem(12);

export default function PostCardWideFooter({
  viewCount,
  pickCount,
  commentCount,
}: PostCardWideFooterProps) {
  return (
    <Wrapper>
      <ViewContainer>
        <IconText
          Icon={View}
          width={iconSize}
          height={iconSize}
          fill={colors.white}
          textColor={colors.white}>
          {viewCount}
        </IconText>
      </ViewContainer>
      <FavComContainer>
        <IconText
          Icon={ThumsUp}
          width={iconSize}
          height={iconSize}
          fillOut={colors.white}
          fillLeft={colors.primary}
          fillRight={colors.white}
          textColor={colors.white}>
          {pickCount}
        </IconText>
        <Space direction="ROW" level={1} />
        <IconText
          Icon={Comment}
          width={iconSize}
          height={iconSize}
          fillIn={colors.white}
          fillOut={colors.white}
          textColor={colors.white}>
          {commentCount}
        </IconText>
      </FavComContainer>
    </Wrapper>
  );
}
const Wrapper = styled.View({
  width: '100%',
  height: rem(31),
  paddingHorizontal: rem(16),
  paddingVertical: rem(8),
  backgroundColor: colors.primary,
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ViewContainer = styled.View({});
const FavComContainer = styled.View({
  flexDirection: 'row',
});
