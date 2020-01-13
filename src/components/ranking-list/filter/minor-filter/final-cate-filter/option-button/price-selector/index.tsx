import React from 'react';
import styled from 'styled-components/native';

import PriceBar from './price-bar';
import PriceData from './price-data';
import Bottom from './bottom';

export default function PriceSelector() {
  return (
    <Wrapper>
      <PriceData />
      <PriceBar />
      <Bottom />
    </Wrapper>
  );
}

const Wrapper = styled.View({});
