import React, {useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';

import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';

import NavigationBar from '@src/modules/navigation/bar';
import ScrollList from '@src/modules/list/scroll';
import PostListFilter from './filter';
import PostCardWideReview from './card/wide/review';
import PostCardReviewNarrow from '@src/components/post-list/card/narrow/review/index';
import PostCardLookNarrow from '@src/components/post-list/card/narrow/look/index';
import Header from '@src/modules/header/index';
import SearchIcon from '@src/assets/icons/search';

import {colors, rem} from '@src/constants';

import FilterContext from '@src/context/filter';
import {listConfig} from '@src/services/Review/config';

export const WIDE = 'WIDE';
export const NARROW = 'NARROW';
const HEADER_MAX_HEIGHT = rem(126);
const HEADER_MIN_HEIGHT = rem(108);

const items = ['리뷰', 'LOOK'];
const CATEGORY = ['REVIEW', 'LOOK'];

const SORT_TYPE = {
  NEW: 'time',
  HOT: 'pickCount',
};

export type PostListScreenProps = ScreenNavigationProps;

export default function PostListScreen(props: PostListScreenProps) {
  const [scrollY] = useState(new Animated.Value(0));
  const [view, setView] = useState(WIDE);
  const [postType, setPostType] = useState<'REVIEW' | 'LOOK'>('REVIEW');

  const [tag, setTag] = useState(null);
  const [pick, setPick] = useState(0);
  const [sort, setSort] = useState(null);
  const [option, setOption] = useState(false);
  const [sortOption, setSortOption] = useState(false);

  const PostListItem =
    view === WIDE
      ? PostCardWideReview
      : postType === 'REVIEW'
      ? PostCardReviewNarrow
      : PostCardLookNarrow;

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

  const filterValue = {
    state: {tag, pick, sort, view, option, sortOption},
    action: {
      setTag,
      setSort,
      setPick,
      setView,
      setOption,
      setSortOption,
    },
  };

  const icons = [
    // {Icon: Write, fill: colors.primary},
    {
      Icon: SearchIcon,
      fill: colors.primary,
      onPress: () => {
        props.navigation.navigate('Search');
      },
    },
  ];

  return (
    <Wrapper>
      <FilterContext.Provider value={filterValue}>
        <Header
          {...{
            title: '포스트',
            height: headerHeight,
            titleSize,
            titlePadding,
            icons,
          }}>
          <NavigationBar
            items={items}
            navControl={{value: postType, setValue: setPostType}}
            category={CATEGORY}
          />
          <PostListFilter postType={postType} />
        </Header>
      </FilterContext.Provider>
      <ScrollList
        requestConfig={listConfig}
        ListItem={PostCardWideReview}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}
        filter={{
          minimumPickCount: pick,
          postType,
          recommendReason: option ? tag : null,
          sortBy: sortOption ? SORT_TYPE[sort] : 'time',
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
  backgroundColor: colors.white,
});
