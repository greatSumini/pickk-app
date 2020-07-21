import React from 'react';
import styled from 'styled-components/native';

import {OrderResponse} from '@src/types';
import OrderCancelProductBrandCard from './brand-card';
import {Col} from '@src/modules/atoms';
import {OrderCancelProductCardProps} from './card';

export type OrderCancelProductListProps = Pick<OrderResponse, 'order'> &
  OrderCancelProductCardProps;

function OrderCancelProductList(props: OrderCancelProductListProps) {
  const {order} = props;

  return (
    <Wrapper>
      {order.map((brand) => (
        <OrderCancelProductBrandCard
          key={brand.brandName}
          {...brand}
          {...(props as OrderCancelProductCardProps)}
        />
      ))}
    </Wrapper>
  );
}

export default React.memo(OrderCancelProductList);

const Wrapper = styled(Col)``;
