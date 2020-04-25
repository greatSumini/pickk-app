import React from 'react';
import styled from 'styled-components/native';
import {RecommendPost} from '@src/modules/types/RecommendPost';
import Text from '@src/modules/atoms/text';
import rem from '@src/constants/rem';
import {View} from 'react-native';
import Space from '@src/modules/atoms/space';
import {MIDDLE_GREY} from '@src/constants/colors';
import {stringifyPassedTime} from '@src/lib/utils/time-parser';

export type PostViewTitleProps = Pick<
  RecommendPost,
  'title' | 'viewCount' | 'time'
>;

export default function PostViewTitle({
  title,
  viewCount,
  time,
}: PostViewTitleProps) {
  return (
    <Wrapper>
      <Text level={2} fontWeight='medium'>
        {title}
      </Text>
      <Row>
        <Text color={MIDDLE_GREY}>조회수 {viewCount}회</Text>
        <Space direction='ROW' size={8} />
        <Text color={MIDDLE_GREY}>{stringifyPassedTime(time)}</Text>
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
  width: '100%',
});

const Row = styled.View({
  marginTop: rem(2),
  flexDirection: 'row',
});
