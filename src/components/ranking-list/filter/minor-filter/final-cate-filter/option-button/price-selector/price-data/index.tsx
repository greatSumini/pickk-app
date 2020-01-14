import React from 'react';
import styled from 'styled-components/native';

import {useRankFilterDrawerContext} from '@src/context/filter';
import Text from '@src/modules/atoms/text';
import {addCommaToNumber} from '@src/lib/utils/price-parser';
import {MIN_PRICE} from '@src/components/ranking-list';

export default function PriceData() {
  const rankFilterDrawerContext = useRankFilterDrawerContext();
  const {minPrice, maxPrice} = rankFilterDrawerContext.state;

  const minPriceHandler = () => {
    const result = addCommaToNumber((minPrice as any)._value);
    if (result === null) {
      return addCommaToNumber(MIN_PRICE);
    }
    return result;
  };

  const maxPriceHandler = () => {
    return addCommaToNumber((maxPrice as any)._value);
  };

  return (
    <Wrapper>
      <Text level={3} fontWeight="bold">
        {minPriceHandler() + ' ~ '}
      </Text>
      <Text level={3} fontWeight="bold">
        {maxPriceHandler()}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flexDirection: 'row',
});
