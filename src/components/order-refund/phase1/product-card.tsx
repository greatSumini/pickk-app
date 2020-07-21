import React from 'react';
import styled from 'styled-components/native';

import {useRefundContext} from '@src/context/refund';
import OrderCancelProductInfo from '@src/components/order-cancel/product/info';
import Section, {SectionSize} from '@src/modules/molecules/section';
import {Space, Row} from '@src/modules/atoms';
import {LIGHT_GREY, rem} from '@src/constants';

function OrderRefundProductCard() {
  const {selected} = useRefundContext().state;

  return (
    <Section title={`총 ${selected.size}개 상품`} size={SectionSize.Small}>
      {[...selected].map((item) => (
        <>
          <ItemWrapper>
            <OrderCancelProductInfo {...item} />
          </ItemWrapper>
          <Space level={1} />
        </>
      ))}
      <Space />
    </Section>
  );
}

export default React.memo(OrderRefundProductCard);

const ItemWrapper = styled(Row)({
  alignItems: 'flex-start',
  paddingHorizontal: rem(26),
  borderBottomWidth: rem(1),
  borderBottomColor: LIGHT_GREY,
});
