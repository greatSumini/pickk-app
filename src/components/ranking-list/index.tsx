import React, {useState, useEffect} from 'react';
import {Animated, BackHandler} from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {
  ItemFilterContext,
  FilterDrawerContext,
  SortContext,
} from '@src/context/filter';
import ScrollList from '@src/modules/list/scroll';
import Header from '@src/modules/header/ranking-list/';
import Search from '@src/assets/icons/search';
import Item from './item/index';

const HEADER_MAX_HEIGHT = rem(126);
const HEADER_MIN_HEIGHT = rem(108);

const icons = [{Icon: Search, fill: colors.primary}];

export default function RankingListScreen(props) {
  const [scrollY] = useState(new Animated.Value(0));
  const [major, setMajor] = useState('ALL');
  const [minor, setMinor] = useState('ALL');
  const [final, setFinal] = useState('ALL');
  const [isCateOpen, setCateOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();
  const [priceOption, setPriceOption] = useState(false);
  const [sort, setSort] = useState('rankScore');

  const sortStore = {
    state: {
      sort,
    },
    action: {
      setSort,
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
      isPriceOpen,
      isCateOpen,
      categories,
      priceOption,
    },
    action: {
      setMinPrice,
      setMaxPrice,
      setPriceOpen,
      setCateOpen,
      setCategories,
      setPriceOption,
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
        <FilterDrawerContext.Provider value={categoryDrawerStore}>
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
              filter={{...itemFilterStore.state, sort}}
            />
          </SortContext.Provider>
        </FilterDrawerContext.Provider>
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
    $sort: ItemRankingSortableField!
    $itemMajorType: ItemMajorType!
    $itemMinorType: ItemMinorType!
    $itemFinalType: ItemFinalType!
  ) {
    getItemRanking(
      itemRankingOption: {
        itemMajorType: $itemMajorType
        itemMinorType: $itemMinorType
        itemFinalType: $itemFinalType
        filterGeneral: {start: $start, first: $first, sortBy: $sort}
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
