import React from 'react';
import styled from 'styled-components/native';

import OrderItemDescription, {
  OrderListItemDescriptionProps,
} from './description';
import {Image, Space, Row} from '@src/modules/atoms';
import {rem, LIGHT_GREY} from '@src/constants';

import {OrderItemType} from '@src/types';

export type OrderListItemCardProps = Pick<OrderItemType, 'imageUrl'> &
  OrderListItemDescriptionProps;

function OrderListItemCard(props: OrderListItemCardProps) {
  const {imageUrl} = props;
  return (
    <Wrapper>
      <Image src={imageUrl} size={128} imgWidth={rem(66)} imgHeight={rem(80)} />
      <Space direction='ROW' size={8} />
      <OrderItemDescription {...(props as OrderListItemDescriptionProps)} />
    </Wrapper>
  );
}

export default React.memo(OrderListItemCard);

const Wrapper = styled(Row)({
  paddingVertical: rem(12),
  borderBottomWidth: rem(1),
  borderBottomColor: LIGHT_GREY,
});
