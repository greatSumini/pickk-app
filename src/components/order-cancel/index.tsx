import React, {useState} from 'react';
import styled from 'styled-components/native';

import {useCancelContext, withCancelContext} from '@src/context/cancel';
import OrderClaimHeader from '../order-claim/header';
import OrderClaimFooter from '../order-claim/footer';
import OrderClaimReason from '../order-claim/reason';
import OrderCancelProductList, {
  OrderCancelProductListProps,
} from './product/list';
import {Col, Line} from '@src/modules/atoms';
import {WHITE} from '@src/constants';

function OrderCancelScreen() {
  const [phase, setPhase] = useState(0);

  const {state, action} = useCancelContext();
  const {orderResponse, reason, selected} = state;
  const {complete, setReason, isSelected, toggleSelect, getPrice} = action;

  const title = '주문 취소';
  const name = '취소';

  const isValid = [selected.size !== 0, reason.length !== 0];
  const {shippingFee, totalPaidAmount, claimedAmount} = getPrice();

  return (
    <Wrapper>
      <OrderClaimHeader {...{phase, setPhase, title}} />
      <Line />
      {phase === 0 && (
        <OrderCancelProductList
          {...(orderResponse as OrderCancelProductListProps)}
          {...{isSelected, toggleSelect}}
        />
      )}
      {phase === 1 && <OrderClaimReason {...{reason, setReason, title}} />}
      <Line level={1} />
      <OrderClaimFooter
        {...{phase, setPhase, name, isValid}}
        onComplete={complete}
        priceData={[
          {label: '총 결제 금액', value: totalPaidAmount},
          {label: '총 결제 취소 금액', value: claimedAmount - shippingFee},
        ]}
      />
    </Wrapper>
  );
}

export default withCancelContext(OrderCancelScreen);

const Wrapper = styled(Col)({
  height: '100%',
  backgroundColor: WHITE,
});
