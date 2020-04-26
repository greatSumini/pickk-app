import React from 'react';
import styled from 'styled-components/native';

import {Text, Space} from '@src/modules/atoms';
import {MIDDLE_GREY} from '@src/constants/colors';

import {rem} from '@src/constants';
import {stringifyPassedTime} from '@src/lib/utils/time-parser';
import {RecommendPost} from '@src/modules/types/RecommendPost';

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
