import {createContext, useContext} from 'react';

import {REVIEW} from '@src/components/post-list/index';

const FilterContext = createContext({
  state: {
    tag: null,
    pick: 0,
    sort: null,
    view: REVIEW,
    option: false,
    sortOption: false,
  },
  action: {
    setTag: null,
    setPick: null,
    setSort: null,
    setView: null,
    setOption: null,
    setSortOption: null,
  },
});

export const useFilterContext = () => useContext(FilterContext);

export default FilterContext;
