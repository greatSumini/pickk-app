import React from 'react';
import styled from 'styled-components/native';

import {addCommaToNumber} from '@src/lib/utils';
import {OrderState, ClaimStatus} from '@src/types/Order';
import {View} from 'react-native';
import {Text, Space, Row, Col} from '@src/modules/atoms';
import {MIDDLE_GREY, SALE_RED, DELIVERY_BLUE, rem} from '@src/constants';

export type OrderListItemDescriptionProps = {
  name: string;
  brandName: string;
  originalPrice: number;
  salePrice?: number;
  color?: string;
  size?: string;
  quantity: number;
  status?: OrderState;
  claimStatus?: ClaimStatus;
  productName?: string;
  orderStateDate?: any;
};

function OrderListItemDescription({
  name,
  brandName,
  originalPrice,
  salePrice,
  color,
  size,
  quantity,
  status,
  claimStatus,
  productName,
  orderStateDate,
}: OrderListItemDescriptionProps) {
  const isSale: boolean = !!(
    salePrice &&
    salePrice !== 0 &&
    salePrice !== originalPrice
  );
  const price = isSale ? salePrice * quantity : originalPrice * quantity;
  const nameWidth = status ? rem(175) : rem(230);
  const options = productName ? productName : `${color}/${size}`;

  const statusColor =
    !!claimStatus ||
    status === OrderState.Pending ||
    status === OrderState.OrderFail
      ? SALE_RED
      : DELIVERY_BLUE;

  return (
    <Wrapper>
      <StyledRow>
        <Text level={1} width={nameWidth} lines={2} ellipsis>
          [{brandName}] {name}
        </Text>
        {status && (
          <Text
            level={1}
            fontWeight='bold'
            color={statusColor}
            style={{textDecorationLine: 'underline'}}>
            {claimStatus ? claimStatus : status}
          </Text>
        )}
      </StyledRow>
      <View style={{flex: 1}} />
      <Text level={1} fontWeight='medium' color={MIDDLE_GREY} ellipsis>
        {options}
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
