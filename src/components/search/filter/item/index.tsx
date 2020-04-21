import React from 'react';

import SortSelector from '@src/modules/molecules/filter/sort-selector';
import FilterButton from '@src/modules/molecules/filter/default-filter-button';

const sortItems = [
  {
    label: '최신순',
    value: {sortBy: 'time', sort: 'DESC'},
  },
  {
    label: '별점순',
    value: {sortBy: 'score', sort: 'DESC'},
  },
];

export default function ItemFilter() {
  return (
    <>
      <FilterButton />
      <SortSelector sortItems={sortItems} />
    </>
  );
}
