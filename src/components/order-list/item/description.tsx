import React from 'react';
import styled from 'styled-components/native';

import {Text, Space, Row, Col} from '@src/modules/atoms';
import {MIDDLE_GREY, SALE_RED, DELIVERY_BLUE, rem} from '@src/constants';

import {addCommaToNumber} from '@src/lib/utils';
import {OrderItemType, OrderState} from '@src/types';

export type OrderListItemDescriptionProps = Pick<
  OrderItemType,
  'name' | 'brandName' | 'quantity' | 'status' | 'claimStatus' | 'productName'
> & {
  originalPrice: number;
  salePrice?: number;
};

function OrderListItemDescription({
  name,
  brandName,
  originalPrice,
  salePrice,
  quantity,
  status,
  claimStatus,
  productName,
}: OrderListItemDescriptionProps) {
  const isSale: boolean = !!(
    salePrice &&
    salePrice !== 0 &&
    salePrice !== originalPrice
  );

  const price = (isSale ? salePrice : originalPrice) * quantity;
  const nameWidth = status ? rem(175) : rem(230);

  const statusColor =
    !!claimStatus ||
    status === OrderState.Pending ||
    status === OrderState.OrderFail
      ? SALE_RED
      : DELIVERY_BLUE;

  return (
    <Wrapper>
      <StyledRow style={{marginBottom: 'auto'}}>
        <Text level={1} width={nameWidth} lines={2} ellipsis>
          [{brandName}] {name}
        </Text>
        {status && (
          <Text
            level={1}
            fontWeight='bold'
            color={statusColor}
            style={{textDecorationLine: 'underline'}}>
            {claimStatus || status}
          </Text>
        )}
      </StyledRow>
      <Text level={1} fontWeight='medium' color={MIDDLE_GREY} ellipsis>
        {productName}
      </Text>
      <Space size={2} />
      <StyledRow>
        <Text level={1} fontWeight='medium' color={MIDDLE_GREY}>
          {quantity + '개'}
        </Text>
        <Text level={2} fontWeight='bold'>
          {addCommaToNumber(price) + '원'}
        </Text>
      </StyledRow>
    </Wrapper>
  );
}

export default React.memo(OrderListItemDescription);

const Wrapper = styled(Col)({
  flex: 1,
  height: rem(80),
  alignItems: 'flex-start',
});

const StyledRow = styled(Row)({
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});
