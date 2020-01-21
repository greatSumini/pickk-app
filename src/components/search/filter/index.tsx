import React from 'react';

import PostFilter from './post';
import ItemFilter from './item';
import CommunityFilter from './community';
import FilterWrapper from '@src/modules/molecules/filter/filter-wrapper';

export default function Filter({navType, text}) {
  return (
    <FilterWrapper>
      {navType === 'POST' && <PostFilter text={text} />}
      {navType === 'ITEM' && <ItemFilter text={text} />}
      {navType === 'COMMUNITY' && <CommunityFilter />}
    </FilterWrapper>
  );
}
