import React from 'react';
import styled from 'styled-components/native';

import rem from '@src/constants/rem';
import {ProfileImg} from '@src/components/post-list/card/wide/header';
import Text from '@src/modules/atoms/text';
import {REGULAR_GREY} from '@src/constants/colors';
import Space from '@src/modules/atoms/space';
import {width} from '@src/constants/dimensions';
import {ItemReview} from '@src/modules/types/ItemReview';

export type ShortReviewProps = Pick<ItemReview, 'shortReview'>;

export default function ShortReview({shortReview}: ShortReviewProps) {
  return (
    <Wrapper>
      <Text level={2}>{shortReview}</Text>
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
