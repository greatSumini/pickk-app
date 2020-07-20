import React from 'react';

import OrderExchangeOptionSelect, {
  OrderExchangeOptionSelectProps,
} from './option-select';
import OrderExchangePhase0ProductCard, {
  OrderExchangePhase0ProductCardProps,
} from './product-card';

export type OrderExchangePhase0Props = OrderExchangeOptionSelectProps &
  OrderExchangePhase0ProductCardProps;

export default function OrderExchangePhase0(props: OrderExchangePhase0Props) {
  return (
    <>
      <OrderExchangePhase0ProductCard
        {...(props as OrderExchangePhase0ProductCardProps)}
      />
      <OrderExchangeOptionSelect
        {...(props as OrderExchangeOptionSelectProps)}
      />
    </>
  );
}
