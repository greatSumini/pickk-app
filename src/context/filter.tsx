import {createContext} from 'react';

import {REVIEW} from '@src/components/post-list/index';

const FilterContext = createContext({
  state: {
    tag: undefined,
    pick: 0,
    sort: undefined,
    view: REVIEW,
    option: false,
    sortOption: false,
  },
  action: {
    setTag: tag => {},
    setPick: pick => {},
    setSort: sort => {},
    setView: view => {},
    setOption: options => {},
    setSortOption: sortOption => {},
  },
});

export default FilterContext;
