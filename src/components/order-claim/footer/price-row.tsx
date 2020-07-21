import React from 'react';
import styled from 'styled-components/native';

import {addCommaToNumber} from '@src/lib/utils';
import {Text, Row} from '@src/modules/atoms';
import {SALE_RED, BLACK, rem} from '@src/constants';

export type OrderClaimFooterPriceRowProps = {
  label: string;
  value: number;
  isLast: boolean;
};

export default function OrderClaimFooterPriceRow({
  label,
  value,
  isLast,
}: OrderClaimFooterPriceRowProps) {
  return (
    <PriceRowWrapper>
      <Text level={isLast ? 3 : 1} fontWeight={isLast ? 'bold' : 'medium'}>
        {label}
      </Text>
      <Text
        level={isLast ? 3 : 1}
        fontWeight={isLast ? 'bold' : 'regular'}
        color={isLast ? SALE_RED : BLACK}>
        {value < 0 ? `(-) ` : ''}
        {addCommaToNumber(value)}원
      </Text>
    </PriceRowWrapper>
  );
}

const PriceRowWrapper = styled(Row)({
  justifyContent: 'space-between',
  width: rem(328),
  marginVertical: rem(6),
  marginHorizontal: 'auto',
});
