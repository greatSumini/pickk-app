import React from 'react';

import SortSelector from '@src/modules/molecules/filter/sort-selector';
import PostTypeSwitchSelector from '@src/modules/molecules/filter/post/post-type-switch';

const sortItems = [
  {
    label: '최신순',
    value: {sortBy: 'time', sort: 'DESC'},
  },
  {
    label: '추천순',
    value: {sortBy: 'pickCount', sort: 'DESC'},
  },
];

export default function PostFilter() {
  return (
    <>
      <PostTypeSwitchSelector />
      <SortSelector sortItems={sortItems} />
    </>
  );
}
