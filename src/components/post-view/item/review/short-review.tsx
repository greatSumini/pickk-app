import React from 'react';
import styled from 'styled-components/native';

import {Text} from '@src/modules/atoms';
import {REGULAR_GREY} from '@src/constants/colors';

import {width, rem} from '@src/constants';
import {ItemReview} from '@src/modules/types/ItemReview';

export type ShortReviewProps = Pick<ItemReview, 'shortReview'>;

export default function ShortReview({shortReview}: ShortReviewProps) {
  return (
    <Wrapper>
      <Text level={2} lines={3000} textAlign='center'>
        {shortReview}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  paddingVertical: rem(8),
  paddingHorizontal: rem(12),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: rem(1),
  borderColor: REGULAR_GREY,
  borderRadius: rem(8),
  width: width - rem(32),
});
