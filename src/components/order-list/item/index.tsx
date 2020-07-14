import React from 'react';
import styled from 'styled-components/native';

import {parseISODate} from '@src/lib/utils/date-parser';
import {OrderItemType} from '@src/types';
import OrderListItemHeader, {
  OrderListItemHeaderProps,
} from '@src/components/order-list/item/header';
import OrderListItemCard, {
  OrderListItemCardProps,
} from '@src/components/order-list/item/card';
import OrderListItemFooter, {
  OrderListItemFooterProps,
} from '@src/components/order-list/item/footer';
import {rem} from '@src/constants';
import {Space, Line, Col} from '@src/modules/atoms';

export type OrderListItemProps = OrderItemType;

export default function OrderListItem(props: OrderListItemProps) {
  const {
    itemId,
    name,
    imageUrl,
    brandName,
    productName,
    quantity,
    status,
    claimStatus,
    paidAt,
    placedAt,
    shippedAt,
    deliveredAt,
    cancelledAt,
    paidAmount,
  } = props;

  const orderStateDate = {
    '주문 일시': parseISODate(paidAt),
    '출고 완료': parseISODate(placedAt),
    '배송 시작': parseISODate(shippedAt),
    '배송 완료': parseISODate(deliveredAt),
    '주문 취소': parseISODate(cancelledAt),
  };

  return (
    <Wrapper>
      <OrderListItemHeader {...(props as OrderListItemHeaderProps)} />
      <OrderListItemCard
        {...({
          id: itemId,
          name,
          brandName,
          imageUrl,
          originalPrice: paidAmount / quantity,
          productName,
          quantity,
          status,
          claimStatus,
          orderStateDate,
        } as OrderListItemCardProps)}
      />
      <Space level={1} />
      <OrderListItemFooter {...(props as OrderListItemFooterProps)} />
      <Space level={1} />
      <Line />
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  paddingHorizontal: rem(16),
});
