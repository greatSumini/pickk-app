import React from 'react';

import OrderExchangePhase1ProductCard, {
  OrderExchangePhase1ProductCardProps,
} from './product-card';
import OrderExchangePolicy, {OrderExchangePolicyProps} from './exchange-policy';
import OrderClaimTrackingCode, {
  OrderClaimTrackingCodeProps,
} from '@src/components/order-claim/tracking-code';
import OrderClaimSentChecker, {
  OrderClaimSentCheckerProps,
} from '@src/components/order-claim/sent-checker';
import {Line} from '@src/modules/atoms';

export type OrderExchangePhase1Props = OrderExchangePolicyProps &
  OrderExchangePhase1ProductCardProps &
  OrderClaimTrackingCodeProps &
  OrderClaimSentCheckerProps;

export default function OrderExchangePhase1(props: OrderExchangePhase1Props) {
  const {orderItemId} = props;
  return (
    <>
      <OrderExchangePhase1ProductCard
        {...(props as OrderExchangePhase1ProductCardProps)}
      />
      <OrderExchangePolicy orderItemId={orderItemId} />
      <OrderClaimTrackingCode {...(props as OrderClaimTrackingCodeProps)} />
      <Line level={1} />
      <OrderClaimSentChecker {...(props as OrderClaimSentCheckerProps)} />
    </>
  );
}
