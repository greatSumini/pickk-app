import React from 'react';
import styled from 'styled-components/native';

import {OrderState, ClaimStatus} from '@src/types/Order';
import OrderItemDescription, {OrderItemDescriptionProps} from './description';
import {Image, Space, Row, Col} from '@src/modules/atoms';
import {rem, LIGHT_GREY} from '@src/constants';

export type OrderListItemCardProps = {
  id: number;
  name: string;
  brandName: string;
  originalPrice: number;
  salePrice?: number;
  imageUrl: string;
  color?: string;
  size?: string;
  quantity: number;
  reviewerId?: number;
  status?: OrderState;
  claimStatus?: ClaimStatus;
  productName?: string;
  orderStateDate?: any;
};

function OrderListItemCard(props: OrderListItemCardProps) {
  const {imageUrl} = props;
  return (
    <Wrapper>
      <StyledRow>
        <Image
          src={imageUrl}
          size={128}
          imgWidth={rem(66)}
          imgHeight={rem(80)}
        />
        <Space direction='ROW' size={8} />
        <OrderItemDescription {...(props as OrderItemDescriptionProps)} />
      </StyledRow>
    </Wrapper>
  );
}

export default React.memo(OrderListItemCard);

const Wrapper = styled(Col)({});

const StyledRow = styled(Row)({
  paddingVertical: rem(12),
  borderBottomWidth: rem(1),
  borderBottomColor: LIGHT_GREY,
});
