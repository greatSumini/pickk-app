import React from 'react';

import OrderRefundProductCard from './product-card';
import OrderClaimFooterPriceRow, {
  OrderClaimFooterPriceRowProps,
} from '@src/components/order-claim/footer/price-row';
import OrderRefundPolicy, {OrderRefundPolicyProps} from './refund-policy';
import OrderClaimTrackingCode, {
  OrderClaimTrackingCodeProps,
} from '@src/components/order-claim/tracking-code';
import OrderClaimSentChecker, {
  OrderClaimSentCheckerProps,
} from '@src/components/order-claim/sent-checker';

export type OrderRefundPhase1Props = OrderClaimFooterPriceRowProps &
  OrderRefundPolicyProps &
  OrderClaimTrackingCodeProps &
  OrderClaimSentCheckerProps;

export default function OrderRefundPhase1(props: OrderRefundPhase1Props) {
  return (
    <>
      <OrderRefundProductCard />
      <OrderClaimFooterPriceRow {...(props as OrderClaimFooterPriceRowProps)} />
      <OrderRefundPolicy {...(props as OrderRefundPolicyProps)} />
      <OrderClaimTrackingCode {...(props as OrderClaimTrackingCodeProps)} />
      <OrderClaimSentChecker {...(props as OrderClaimSentCheckerProps)} />
    </>
  );
}
