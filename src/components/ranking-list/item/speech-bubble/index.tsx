import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {addSizeToFilename, xsmall} from '@src/lib/utils/url-parser';
import Img from '@src/modules/atoms/img';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import SpeechBubbleProps from './props';

export default function SpeechBubble(props: SpeechBubbleProps) {
  const {data} = props;

  return (
    <Wrapper>
      <TopTriangle />
      <Content>
        <Text color={colors.white} level={2}>
          {data ? data.shortReview : ''}
        </Text>
        <Space direction="COL" level={1} />
        <UserInfo>
          {data && (
            <Img
              imgWidth={rem(12)}
              imgHeight={rem(12)}
              circle
              source={{
                uri: addSizeToFilename(data.userInfo.profileImageUrl, xsmall),
              }}
            />
          )}
          <Space direction="ROW" />
          <Text color={colors.white}>{data ? data.userInfo.name : ''}</Text>
        </UserInfo>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
});

const TopTriangle = styled.View({
  position: 'relative',
  top: 0,
  left: rem(26),
  width: rem(4),
  height: rem(4),
  borderWidth: rem(6),
  borderBottomColor: colors.backgroundBlack,
  borderTopColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
});

const Content = styled.View({
  width: '100%',
  backgroundColor: colors.backgroundBlack,
  borderRadius: rem(10),
  paddingHorizontal: rem(16),
  paddingVertical: rem(8),
  justifyContent: 'space-between',
  minHeight: rem(53),
});

const UserInfo = styled.View({
  flexDirection: 'row',
});
