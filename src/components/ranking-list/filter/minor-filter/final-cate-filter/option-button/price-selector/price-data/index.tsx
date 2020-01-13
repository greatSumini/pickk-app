import React from 'react';
import styled from 'styled-components/native';

import {useRankFilterDrawerContext} from '@src/context/filter';
import rem from '@src/constants/rem';

export default function PriceData() {
  const rankFilterDrawerContext = useRankFilterDrawerContext();
  const {minPrice, maxPrice} = rankFilterDrawerContext.state;

  return <Wrapper />;
}

const Wrapper = styled.View({});
