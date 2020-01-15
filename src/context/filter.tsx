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

export const ItemFilterContext = createContext({
  state: {
    itemMajorType: 'ALL',
    itemMinorType: 'ALL',
    itemFinalType: 'ALL',
  },
  action: {
    setItemMajorType: null,
    setItemMinorType: null,
    setItemFinalType: null,
  },
});
export const useItemFilterContext = () => useContext(ItemFilterContext);

export const RankFilterDrawerContext = createContext({
  state: {
    minPrice: null,
    maxPrice: null,
    minState: null,
    maxState: null,
    priceOption: null,
    option: null,
  },
  action: {
    setMinState: null,
    setMaxState: null,
    setPriceOption: null,
    setOption: null,
  },
});
export const useRankFilterDrawerContext = () =>
  useContext(RankFilterDrawerContext);

export const SortContext = createContext({
  state: {
    sortOptions: {
      sort: null,
      sortBy: null,
    },
  },
  action: {
    setSortOptions: null,
  },
});
export const useSortContext = () => useContext(SortContext);

export default FilterContext;
