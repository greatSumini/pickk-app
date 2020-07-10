import React from 'react';
import styled from 'styled-components/native';

import ItemPartnerIcon from '@src/assets/icons/item/Partner';
import {Text, Image} from '@src/modules/atoms';
import {rem, colors} from '@src/constants';

import {IReview, IReviewItem} from '@src/interfaces';

export type PostCardWideItemRowProps = Pick<IReview, 'reviewItems'>;

export default function PostCardWideItemRow({
  reviewItems,
}: PostCardWideItemRowProps) {
  return (
    <Wrapper onStartShouldSetResponder={() => true}>
      <ItemRow horizontal showsHorizontalScrollIndicator={false}>
        {reviewItems?.map((reviewItem) => (
          <CardItem key={reviewItem.id} {...reviewItem} />
        ))}
      </ItemRow>
    </Wrapper>
  );
}

export type CardItemProps = Pick<IReviewItem, 'isPurchasable' | 'item'>;

const CardItem = ({isPurchasable, item}: CardItemProps) => {
  const {nameKor} = item.brand;

  return (
    <ItemInfo>
      <ItemImg
        src={item.imageUrl}
        size={128}
        style={{
          borderWidth: isPurchasable ? rem(2) : rem(0.5),
          borderColor: isPurchasable ? colors.primary : colors.lightGrey,
          overflow: 'hidden',
        }}
      />
      <ItemNameWrapper>
        <ItemName level={1} ellipsis>
          {nameKor}
        </ItemName>
      </ItemNameWrapper>
      {isPurchasable && (
        <ItemPartnerIcon style={{position: 'absolute', top: 3, left: 3}} />
      )}
    </ItemInfo>
  );
};

const Wrapper = styled.View({
  width: '100%',
  height: rem(93),
});

const ItemRow = styled.ScrollView({
  paddingRight: rem(16),
  paddingTop: rem(7),
});
const ItemInfo = styled.View({
  marginLeft: rem(16),
  position: 'relative',
});
const ItemImg = styled(Image)({
  width: rem(56),
  height: rem(56),
  borderRadius: rem(28),
});
const ItemName = styled(Text)({
  marginTop: rem(4),
  color: colors.primary,
  textAlign: 'center',
});

const ItemNameWrapper = styled.View({
  width: rem(56),
});
