import React from 'react';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';

import rem from '@src/constants/rem';
import {ItemReview} from '@src/modules/types/ItemReview';
import ShortReview from './short-review';
import Space from '@src/modules/atoms/space';
import Image from '@src/modules/atoms/img';
import {width} from '@src/constants/dimensions';

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
  console.log(review);
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
