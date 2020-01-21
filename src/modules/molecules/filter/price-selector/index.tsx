import React from 'react';
import styled from 'styled-components/native';

import PriceBar from './price-bar';
import PriceData from './price-data';
import Bottom from './bottom';
import {width} from '@src/constants/dimensions';
import rem from '@src/constants/rem';
import Space from '@src/modules/atoms/space';

export const PADDING = rem(16);
export const SIZE = width - 2 * PADDING;
export const DIM = rem(20);
export const MIN_PRICE = 10000;
export const MAX_PRICE = 1000000;

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
