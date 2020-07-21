import React from 'react';
import styled from 'styled-components/native';

import Util from '@src/lib/utils';
import {OrderItemType} from '@src/types';
import Section, {SectionSize} from '@src/modules/molecules/section';
import {rem, LIGHT_GREY, REGULAR_GREY} from '@src/constants';
import {Text, Row, Col, Space, Image} from '@src/modules/atoms';

export type OrderExchangePhase1ProductCardProps = Pick<
  OrderItemType,
  'brandName' | 'name' | 'imageUrl'
> & {optionValues?: string[]};

function OrderExchangePhase1ProductCard(
  props: OrderExchangePhase1ProductCardProps,
) {
  const {brandName, name, imageUrl, optionValues} = props;
  return (
    <Section size={SectionSize.Small} title='교환 옵션'>
      <Space level={1} />
      <ItemWrapper>
        <Image
          size='avatar'
          src={imageUrl}
          style={{width: rem(50), height: rem(60)}}
        />
        <Space direction='ROW' size={8} />
        <StyledCol>
          <Text level={1} fontWeight='bold'>
            {brandName}
          </Text>
          <Text level={1}>{name}</Text>
        </StyledCol>
      </ItemWrapper>
      <Space level={1} />
      {optionValues?.map((value) => (
        <React.Fragment key={value}>
          <OptionValueWrapper>
            <Text level={1}>{value}</Text>
          </OptionValueWrapper>
          <Space size={8} />
        </React.Fragment>
      ))}
      <Space />
    </Section>
  );
}

export default React.memo(OrderExchangePhase1ProductCard, (prev, next) =>
  Util.isEqualArray(prev.optionValues, next.optionValues),
);

const ItemWrapper = styled(Row)({
  paddingHorizontal: rem(16),
  borderBottomWidth: rem(1),
  borderBottomColor: LIGHT_GREY,
});

const StyledCol = styled(Col)({
  height: rem(60),
  alignItems: 'flex-start',
  justifyContent: 'space-between',
});

const OptionValueWrapper = styled.View({
  width: rem(328),
  marginVertical: rem(0),
  marginHorizontal: 'auto',
  paddingVertical: rem(8),
  paddingHorizontal: rem(12),
  borderRadius: rem(8),
  borderStyle: 'solid',
  borderWidth: rem(1),
  borderColor: REGULAR_GREY,
});
