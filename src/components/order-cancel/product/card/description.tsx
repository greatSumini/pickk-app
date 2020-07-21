import React from 'react';
import styled from 'styled-components/native';

import {OrderItem} from '@src/types';
import {addCommaToNumber} from '@src/lib/utils';
import {Space, Text, Col, Row} from '@src/modules/atoms';
import {BLACK, MIDDLE_GREY, rem} from '@src/constants';

export type OrderCancelProductDescriptionProps = Pick<
  OrderItem,
  'name' | 'paidAmount' | 'productName' | 'quantity'
>;

export default function OrderCancelProductDescription(
  props: OrderCancelProductDescriptionProps,
) {
  const {name, paidAmount, productName, quantity} = props;
  return (
    <Wrapper>
      <FirstRow>
        <ItemNameWrapper>
          <Text level={1} color={BLACK} fontWeight='regular' ellipsis lines={2}>
            {name}
          </Text>
        </ItemNameWrapper>
        <Text level={1} fontWeight='bold' color={BLACK}>
          {addCommaToNumber(paidAmount)}원
        </Text>
      </FirstRow>
      <Space size={2} />
      <Text level={1} fontWeight='medium' color={MIDDLE_GREY}>
        {productName}
      </Text>
      <Space size={2} />
      <Text level={1} fontWeight='medium' color={MIDDLE_GREY}>
        {quantity}개
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  width: 'auto',
  flex: 1,
  height: rem(80),
  alignItems: 'flex-start',
});

const FirstRow = styled(Row)({
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

const ItemNameWrapper = styled.View({
  width: rem(176),
});
