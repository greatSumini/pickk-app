import React from 'react';
import styled from 'styled-components/native';

import {OrderItem} from '@src/types';
import OrderCancelProductDescription, {
  OrderCancelProductDescriptionProps,
} from './description';
import CheckButton from '@src/modules/molecules/button/check';
import {rem} from '@src/constants';
import {Col, Row, Space, Image} from '@src/modules/atoms';

export type OrderCancelProductCardProps = OrderItem & {
  isSelected: (item: OrderItem) => boolean;
  toggleSelect: (item: OrderItem) => void;
};

export default function OrderCancelProductCard(
  props: OrderCancelProductCardProps,
) {
  const {isSelected, toggleSelect} = props;
  let orderItem = {...props};
  delete orderItem.isSelected;
  delete orderItem.toggleSelect;

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
        <Image
          src={props.imageUrl}
          size={50}
          imgWidth={rem(50)}
          imgHeight={rem(60.6)}
        />
        <Space direction='ROW' size={8} />
        <OrderCancelProductDescription
          {...(props as OrderCancelProductDescriptionProps)}
        />
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
