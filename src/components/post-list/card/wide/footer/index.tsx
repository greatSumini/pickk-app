import React from 'react';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import PostCardWideFooterProps from './props';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import View from '@src/assets/icons/view';
import ThumsUp from '@src/assets/icons/thums-up';
import Comment from '@src/assets/icons/comment';
import Space from '@src/modules/atoms/space';

const color = 'white';
const iconSize = rem(12).toString();

export default function PostCardWideFooter(props: PostCardWideFooterProps) {
  const {viewCount, pickCount, commentCount} = props;

  return (
    <Wrapper>
      <ViewContainer>
        <IconText Icon={View} width={iconSize} height={iconSize}>
          {viewCount}
        </IconText>
      </ViewContainer>
      <FavComContainer>
        <IconText Icon={ThumsUp} width={iconSize} height={iconSize}>
          {pickCount}
        </IconText>
        <Space direction="ROW" level={1} />
        <IconText Icon={Comment} width={iconSize} height={iconSize}>
          {commentCount}
        </IconText>
      </FavComContainer>
    </Wrapper>
  );
}

const IconText = (props: {
  Icon: any;
  children: number;
  style?: any;
  width: string;
  height: string;
}) => {
  const {Icon, children, style, width, height} = props;
  return (
    <IconTextWrapper style={style}>
      <Icon
        style={{width: width, height: height, marginRight: rem(5)}}
        fill={color}
        fillIn="#fff"
        fillOut={color}
        fillLeft={colors.primary}
        fillRight={color}
      />

      <Text color={color} level={1} ellipsis={true}>
        {children}
      </Text>
    </IconTextWrapper>
  );
};

const IconTextWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

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
