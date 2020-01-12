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

export const FilterDrawerContext = createContext({
  state: {
    minPrice: null,
    maxPrice: null,
    categories: null,
    isPriceOpen: null,
    isCateOpen: null,
    priceOption: null,
  },
  action: {
    setMinPrice: null,
    setMaxPrice: null,
    setCategories: null,
    setPriceOpen: null,
    setCateOpen: null,
    setPriceOption: null,
  },
});

export const SortContext = createContext({
  state: {
    sort: null,
  },
  action: {
    setSort: null,
  },
});

export const useFilterContext = () => useContext(FilterContext);

export default FilterContext;
