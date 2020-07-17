import React from 'react';
import styled from 'styled-components';

import {OrderResponse} from '@src/types';
import OrderCancelProductBrandCard, {
  OrderCancelProductBrandCardProps,
} from './brand-card';
import {Col} from '@src/modules/atoms';

export type OrderCancelProductListProps = Pick<OrderResponse, 'order'> &
  OrderCancelProductBrandCardProps;

function OrderCancelProductList(props: OrderCancelProductListProps) {
  const {order} = props;

  return (
    <Wrapper>
      {order.map((brand) => (
        <OrderCancelProductBrandCard
          key={brand.brandName}
          {...brand}
          {...(props as OrderCancelProductBrandCardProps)}
        />
      ))}
    </Wrapper>
  );
}

export default React.memo(OrderCancelProductList);

const Wrapper = styled(Col)``;
