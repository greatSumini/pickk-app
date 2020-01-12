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

export default FilterContext;
