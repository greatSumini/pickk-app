import React, {useContext} from 'react';
import styled from 'styled-components/native';

import rem from '@src/constants/rem';
import {ItemFilterContext} from '@src/context/filter';
import MajorFilter from './major-filter';
import MinorFilter from './minor-filter';

export default function ItemFilter() {
  const itemFilterData = useContext(ItemFilterContext);
  const {itemMajorType} = itemFilterData.state;

  return (
    <Wrapper>
      {itemMajorType === 'ALL' ? <MajorFilter /> : <MinorFilter />}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(68),
});
