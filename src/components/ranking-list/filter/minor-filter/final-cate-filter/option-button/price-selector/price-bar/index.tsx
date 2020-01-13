import React from 'react';
import styled from 'styled-components/native';

import {useRankFilterDrawerContext} from '@src/context/filter';
import rem from '@src/constants/rem';

export default function PriceBar() {
  const rankFilterDrawerContext = useRankFilterDrawerContext();
  const {minPrice, maxPrice} = rankFilterDrawerContext.state;
  const {
    setMaxPrice,
    setMinPrice,
    setPriceOption,
  } = rankFilterDrawerContext.action;

  return <Wrapper />;
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(10),
  backgroundColor: 'black',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});

const PriceIndicator = styled.View({
  width: rem(20),
  height: rem(20),
  borderRadius: rem(10),
  backgroundColor: 'red',
});
