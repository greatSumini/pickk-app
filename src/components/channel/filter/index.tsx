import React from 'react';

import PostFilter from './post';
import ItemFilter from './item';
import FilterWrapper from '@src/modules/molecules/filter/wrapper';

export default function Filter({navType, id}) {
  return (
    <FilterWrapper>
      {navType === 'POST' && <PostFilter id={id} />}
      {navType === 'ITEM' && <ItemFilter id={id} />}
    </FilterWrapper>
  );
}
