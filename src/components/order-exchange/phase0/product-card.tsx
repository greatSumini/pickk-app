import React from 'react';
import styled from 'styled-components/native';

import {OrderItemType} from '@src/types';
import {rem, LIGHT_GREY, MIDDLE_GREY} from '@src/constants';
import {Row, Image, Space, Text, Col} from '@src/modules/atoms';

export type OrderExchangePhase0ProductCardProps = Pick<
  OrderItemType,
  | 'brandName'
  | 'brandImageUrl'
  | 'name'
  | 'productName'
  | 'quantity'
  | 'imageUrl'
>;

function OrderExchangePhase0ProductCard(
  props: OrderExchangePhase0ProductCardProps,
) {
  const {
    brandName,
    brandImageUrl,
    name,
    productName,
    quantity,
    imageUrl,
  } = props;
  return (
    <>
      <StyledRow>
        <Image
          circle
          border
          size='avatar'
          src={brandImageUrl}
          imgWidth={rem(24)}
          imgHeight={rem(24)}
        />
        <Space direction='ROW' size={8} />
        <Text level={2} fontWeight='bold'>
          {brandName}
        </Text>
      </StyledRow>
      <StyledRow>
        <Image
          src={imageUrl}
          imgWidth={rem(66)}
          imgHeight={rem(80)}
          size={128}
        />
        <Space direction='ROW' size={8} />
        <StyledCol>
          <Text level={1}>{name}</Text>
          <Text level={1} color={MIDDLE_GREY}>
            {productName}
          </Text>
          <Text level={1} color={MIDDLE_GREY}>
            {quantity}개
          </Text>
        </StyledCol>
      </StyledRow>
    </>
  );
}

export default React.memo(OrderExchangePhase0ProductCard);

const StyledRow = styled(Row)({
  paddingVertical: rem(10),
  paddingHorizontal: rem(16),
  borderBottomWidth: rem(1),
  borderBottomColor: LIGHT_GREY,
});

const StyledCol = styled(Col)({
  width: rem(202),
  height: rem(80),
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});
