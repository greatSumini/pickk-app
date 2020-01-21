import React from 'react';
import styled from 'styled-components/native';

import PriceBar from './price-bar';
import PriceData from './price-data';
import Bottom from './bottom';
import Space from '@src/modules/atoms/space';

export default function PriceSelector({setVisible}) {
  return (
    <Wrapper>
      <PriceData />
      <Space level={3} />
      <PriceBar />
      <Space level={3} />
      <Bottom setVisible={setVisible} />
      <Space />
    </Wrapper>
  );
}

const Wrapper = styled.View({});
