import React from 'react';
import styled from 'styled-components/native';

import {OrderItem} from '@src/types';
import OrderCancelProductInfo, {OrderCancelProductInfoProps} from './info';
import CheckButton from '@src/modules/molecules/button/check';
import {rem} from '@src/constants';
import {Col, Row, Space, Image} from '@src/modules/atoms';

export type OrderCancelProductCardProps = {
  isSelected: (item: OrderItem) => boolean;
  toggleSelect: (item: OrderItem) => void;
};

export default function OrderCancelProductCard(
  props: OrderItem & OrderCancelProductCardProps,
) {
  const {isSelected, toggleSelect, ...orderItem} = props;

  return (
    <Wrapper>
      <StyledRow>
        <CheckButton
          width={rem(16)}
          height={rem(16)}
          onPress={() => {
            toggleSelect(orderItem);
          }}
          selected={isSelected(orderItem)}
        />
        <Space direction='ROW' level={1} />
        <OrderCancelProductInfo {...(props as OrderCancelProductInfoProps)} />
      </StyledRow>
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  paddingHorizontal: rem(16),
});

const StyledRow = styled(Row)({
  alignItems: 'flex-start',
  paddingVertical: rem(12),
});
