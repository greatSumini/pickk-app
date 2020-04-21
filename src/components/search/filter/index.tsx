import React from 'react';

import PostFilter from './post';
import ItemFilter from './item';
import CommunityFilter from './community';
import FilterWrapper from '@src/modules/molecules/filter/wrapper';

type FilterProps = {
  navType: 'POST' | 'ITEM' | 'COMMUNITY';
};

export default function Filter({navType}: FilterProps) {
  return (
    <FilterWrapper>
      {navType === 'POST' && <PostFilter />}
      {navType === 'ITEM' && <ItemFilter />}
      {navType === 'COMMUNITY' && <CommunityFilter />}
    </FilterWrapper>
  );
}
