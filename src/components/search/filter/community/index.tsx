import React from 'react';

import SortSelector from '@src/modules/molecules/filter/sort-selector';
import FilterButton from '@src/modules/molecules/filter/default-filter-button';

const sortItems = [
  {
    label: '최신순',
    value: {sortBy: 'time', sort: 'DESC'},
  },
  {
    label: '조회순',
    value: {sortBy: 'viewCount', sort: 'DESC'},
  },
];
export default function CommunityFilter() {
  return (
    <>
      <FilterButton />
      <SortSelector sortItems={sortItems} />
    </>
  );
}
