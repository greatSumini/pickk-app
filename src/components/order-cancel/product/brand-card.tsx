import React from 'react';
import styled from 'styled-components/native';

import {OrderBrand} from '@src/types';
import {addCommaToNumber} from '@src/lib/utils';
import OrderDetailProductCard, {OrderCancelProductCardProps} from './card';
import {Text, Row, Image, Space, Col, Line} from '@src/modules/atoms';
import {rem, MIDDLE_GREY, LIGHT_GREY} from '@src/constants';

export type OrderCancelProductBrandCardProps = OrderBrand &
  OrderCancelProductCardProps;

function OrderCancelProductBrandCard(props: OrderCancelProductBrandCardProps) {
  const {
    brandName,
    brandImageUrl,
    shippingFee,
    orderItems,
    isSelected,
    toggleSelect,
  } = props;

  return (
    <Wrapper>
      <Header>
        <Row>
          <Image
            circle
            border
            src={brandImageUrl}
            size='avatar'
            imgWidth={rem(24)}
            imgHeight={rem(24)}
          />
          <Space direction='ROW' size={8} />
          <Text level={2} fontWeight='bold'>
            {brandName}
          </Text>
        </Row>
      </Header>
      <Line />
      {orderItems.map((item) => (
        <OrderDetailProductCard
          key={item.itemId + item.productName}
          {...item}
          {...{isSelected, toggleSelect}}
        />
      ))}
      {shippingFee !== 0 && (
        <DeliveryPriceWrapper>
          <Text level={1} color={MIDDLE_GREY}>
            배송비
          </Text>
          <Text level={1}>{addCommaToNumber(shippingFee) + '원'}</Text>
        </DeliveryPriceWrapper>
      )}
    </Wrapper>
  );
}

export default React.memo(OrderCancelProductBrandCard);

const Wrapper = styled(Col)``;

const Header = styled.View({
  width: '100%',
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
  borderStyle: 'solid',
  borderWidth: rem(1),
  borderColor: LIGHT_GREY,
});

const DeliveryPriceWrapper = styled(Row)({
  justifyContent: 'space-between',
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
});
