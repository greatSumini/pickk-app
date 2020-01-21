import React from 'react';
import styled from 'styled-components/native';

import {usePriceFilterContext} from '@src/context/filter';
import Text from '@src/modules/atoms/text';
import {addCommaToNumber} from '@src/lib/utils/price-parser';
import {MIN_PRICE} from '..';

export default function PriceData() {
  const priceFilterContext = usePriceFilterContext();
  const {minimumPrice, maximumPrice} = priceFilterContext.state;

  const minimumPriceHandler = () => {
    const result = addCommaToNumber((minimumPrice as any)._value);
    return result || addCommaToNumber(MIN_PRICE);
  };

  const maximumPriceHandler = () => {
    return addCommaToNumber((maximumPrice as any)._value);
  };

  return (
    <Wrapper>
      <Text level={3} fontWeight='bold'>
        {minimumPriceHandler() + ' ~ '}
      </Text>
      <Text level={3} fontWeight='bold'>
        {maximumPriceHandler()}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flexDirection: 'row',
});
