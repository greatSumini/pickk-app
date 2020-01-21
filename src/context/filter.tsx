import {createContext, useContext} from 'react';

const FilterContext = createContext({
  state: {
    tag: null,
    pick: 0,
    sort: null,
    view: null,
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

export const PriceFilterContext = createContext({
  state: {
    minimumPrice: null,
    maximumPrice: null,
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
export const usePriceFilterContext = () => useContext(PriceFilterContext);

export const SortContext = createContext({
  state: {
    sortOption: {
      sort: null,
      sortBy: null,
    },
  },
  action: {
    setSortOption: null,
  },
});
export const useSortContext = () => useContext(SortContext);

export const InitailizeCommonStatesContext = createContext({
  initailizeCommonStates: () => {},
});
export const useInitailizeCommonStatesContext = () =>
  useContext(InitailizeCommonStatesContext);

export const PostFilterContext = createContext({
  state: {
    postType: null,
  },
  action: {
    setPostType: null,
  },
});
export const usePostFilterContext = () => useContext(PostFilterContext);
export default FilterContext;
