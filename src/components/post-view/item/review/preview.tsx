import React from 'react';
import styled from 'styled-components/native';
import {ItemReview} from '@src/modules/types/ItemReview';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import Image from '@src/modules/atoms/img';
import {MIDDLE_GREY, BLACK} from '@src/constants/colors';
import {tagEnToKo} from '@src/data/post/tag';
import StarIcon from '@src/assets/icons/star';

export type ReviewPreviewProps = Pick<
  ItemReview,
  'recommendReason' | 'userInfo' | 'score'
>;

function ReviewPreview({userInfo, recommendReason, score}: ReviewPreviewProps) {
  const {name, profileImageUrl} = userInfo;

  return (
    <Wrapper>
      <Image
        style={{width: rem(16), height: rem(16)}}
        source={{uri: profileImageUrl}}
        circle
        resizeMode='stretch'
      />
      <Text
        level={1}
        fontWeight='medium'
        color={MIDDLE_GREY}
        style={{alignItems: 'center'}}>
        <Text level={1} fontWeight='bold'>
          {name}
        </Text>
        의{' '}
        <Text level={1} fontWeight='bold'>
          #{tagEnToKo[recommendReason]}{' '}
          <StarIcon style={{width: rem(12), height: rem(12)}} fill={BLACK} />
          {score.toFixed(1)}
        </Text>{' '}
        아이템
      </Text>
    </Wrapper>
  );
}

export default React.memo(ReviewPreview);

const Wrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingLeft: rem(16),
  paddingVertical: rem(8),
});
