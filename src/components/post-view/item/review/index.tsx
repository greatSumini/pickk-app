import React from 'react';
import styled from 'styled-components/native';

import ShortReview from './short-review';
import {Text, Space, Image} from '@src/modules/atoms';

import {width, rem} from '@src/constants';
import {ItemReview} from '@src/modules/types/ItemReview';

export type PostViewReviewProps = Pick<
  ItemReview,
  'userInfo' | 'shortReview' | 'review' | 'images'
>;

function PostViewReview({
  userInfo,
  shortReview,
  review,
  images,
}: PostViewReviewProps) {
  const {name} = userInfo;
  return (
    <Wrapper>
      <Text level={3} fontWeight='medium'>
        <Text level={3} fontWeight='bold'>
          {name}
        </Text>
        의 후기
      </Text>
      <Space level={1} />
      <ShortReview shortReview={shortReview} />
      <Space level={1} />
      <Image
        source={{uri: images[0].imageUrl}}
        style={{width: width - rem(32), height: width - rem(32)}}
        resizeMode='center'
      />
      <Space level={1} />
      <Text level={2} lines={3000}>
        {review}
      </Text>
    </Wrapper>
  );
}

export default React.memo(PostViewReview);

const Wrapper = styled.View({
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  paddingVertical: rem(12),
  paddingHorizontal: rem(16),
});
