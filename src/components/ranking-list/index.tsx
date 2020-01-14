import React, {useState, useEffect} from 'react';
import {Animated, BackHandler} from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import Search from '@src/assets/icons/search';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {
  ItemFilterContext,
  RankFilterDrawerContext,
  SortContext,
} from '@src/context/filter';
import ScrollList from '@src/modules/list/scroll';
import Header from '@src/modules/header/ranking-list/';
import Item from './item/index';
import {width} from '@src/constants/dimensions';

export const PADDING = rem(16);
export const SIZE = width - 2 * PADDING;
export const DIM = rem(20);
export const MIN_PRICE = 10000;
export const MAX_PRICE = 1000000;

const HEADER_MAX_HEIGHT = rem(126);
const HEADER_MIN_HEIGHT = rem(108);

const icons = [{Icon: Search, fill: colors.primary}];

export default function RankingListScreen(props) {
  const [scrollY] = useState(new Animated.Value(0));
  const [major, setMajor] = useState('ALL');
  const [minor, setMinor] = useState('ALL');
  const [final, setFinal] = useState('ALL');
  const [priceOption, setPriceOption] = useState(false);
  const [sortBy, setSortBy] = useState('rankScore');
  const [sort, setSort] = useState('DESC');
  const [minPrice] = useState(new Animated.Value(MIN_PRICE));
  const [maxPrice] = useState(new Animated.Value(MAX_PRICE));
  const [minState, setMinState] = useState(0);
  const [maxState, setMaxState] = useState(SIZE - DIM);
  const [option, setOption] = useState(false);
  const minimumPrice =
    priceOption && option ? (minPrice as any)._value : MIN_PRICE;
  const maximumPrice =
    priceOption && option ? (maxPrice as any)._value : MAX_PRICE;

  const sortStore = {
    state: {
      sort,
      sortBy,
    },
    action: {
      setSort,
      setSortBy,
    },
  };

  const itemFilterStore = {
    state: {
      itemMajorType: major,
      itemMinorType: minor,
      itemFinalType: final,
    },
    action: {
      setItemMajorType: setMajor,
      setItemMinorType: setMinor,
      setItemFinalType: setFinal,
    },
  };

  const categoryDrawerStore = {
    state: {
      minPrice,
      maxPrice,
      minState,
      maxState,
      priceOption,
      option,
    },
    action: {
      setMinState,
      setMaxState,
      setPriceOption,
      setOption,
    },
  };

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp',
  });

  const titleSize = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [rem(24), rem(16)],
    extrapolate: 'clamp',
  });

  const titlePadding = scrollY.interpolate({
    inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
    outputRange: [rem(20), rem(8)],
    extrapolate: 'clamp',
  });

  const handleBackPress = () => {
    if (major === 'ALL') {
      return false;
    } else {
      setMajor('ALL');
      setMinor('ALL');
      setFinal('ALL');
      setSortBy('rankScore');
      setSort('DESC');
      setPriceOption(false);
      setOption(false);
      minPrice.setValue(MIN_PRICE);
      maxPrice.setValue(MAX_PRICE);
      setMinState(0);
      setMaxState(SIZE - DIM);
      return true;
    }
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackPress);
    return function cleanup() {
      BackHandler.removeEventListener('hardwareBackPress', handleBackPress);
    };
  }, [major]);

  return (
    <Wrapper>
      <ItemFilterContext.Provider value={itemFilterStore}>
        <RankFilterDrawerContext.Provider value={categoryDrawerStore}>
          <SortContext.Provider value={sortStore}>
            <Header
              title="랭킹"
              icons={icons}
              height={headerHeight}
              titlePadding={titlePadding}
              titleSize={titleSize}
            />
            <ScrollList
              category="getItemRanking"
              query={GET_ITEM_RANKING}
              ListItem={Item}
              onScroll={Animated.event([
                {nativeEvent: {contentOffset: {y: scrollY}}},
              ])}
              filter={{
                ...itemFilterStore.state,
                sortBy,
                sort,
                minimumPrice,
                maximumPrice,
              }}
            />
          </SortContext.Provider>
        </RankFilterDrawerContext.Provider>
      </ItemFilterContext.Provider>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
});

const GET_ITEM_RANKING = gql`
  query getItemRanking(
    $start: Int!
    $first: Int!
    $sort: SortDirection
    $sortBy: ItemRankingSortableField!
    $itemMajorType: ItemMajorType!
    $itemMinorType: ItemMinorType!
    $itemFinalType: ItemFinalType!
    $minimumPrice: Int
    $maximumPrice: Int
  ) {
    getItemRanking(
      itemRankingOption: {
        itemMajorType: $itemMajorType
        itemMinorType: $itemMinorType
        itemFinalType: $itemFinalType
        filterGeneral: {
          start: $start
          first: $first
          sortBy: $sortBy
          sort: $sort
        }
        minimumPrice: $minimumPrice
        maximumPrice: $maximumPrice
      }
    ) {
      brandId
      brandKor
      brandEng
      id
      groupId
      name
      originalPrice
      salePrice
      imageUrl
      purchaseUrl
      averageScore
      pickCount
      itemMinorType
      itemMajorType
      itemFinalType
    }
  }
`;
