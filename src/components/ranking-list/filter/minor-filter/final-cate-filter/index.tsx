import React from 'react';
import styled from 'styled-components/native';

import OptionButton from './option-button';
import CategoryButton from './category-button';
import SortSelector from '@src/modules/molecules/filter/sort-selector';
import rem from '@src/constants/rem';
import {useItemFilterContext} from '@src/context/filter';
import {itemCate} from '@src/data/item';
import Space from '@src/modules/atoms/space';

const sortItems = [
  {
    label: '추천순',
    value: {sortBy: 'rankScore', sort: 'DESC'},
  },
  {
    label: '높은 가격순',
    value: {sortBy: 'price', sort: 'DESC'},
  },
  {
    label: '낮은 가격순',
    value: {sortBy: 'price', sort: 'ASC'},
  },
];

export default function FinalCateFilter() {
  const itemFilterContext = useItemFilterContext();
  const {itemMinorType} = itemFilterContext.state;

  return (
    <Wrapper>
      <Row>
        <OptionButton />
        <Space direction='ROW' />
        {itemCate[itemMinorType] && <CategoryButton />}
      </Row>
      <SortSelector sortItems={sortItems} />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(36),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: rem(12),
  paddingRight: rem(16),
});

const Row = styled.View({
  flexDirection: 'row',
});
