import React from 'react';

import PostFilter from './post';
import ItemFilter from './item';
import CommunityFilter from './community';
import FilterWrapper from '@src/modules/molecules/filter/wrapper';

export default function Filter({navType}) {
  return (
    <FilterWrapper>
      {navType === 'POST' && <PostFilter />}
      {navType === 'ITEM' && <ItemFilter />}
      {navType === 'COMMUNITY' && <CommunityFilter />}
    </FilterWrapper>
  );
}
