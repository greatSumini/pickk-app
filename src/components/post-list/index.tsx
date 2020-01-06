import React, {useState} from 'react';
import {Animated} from 'react-native';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import Search from '@src/assets/icons/search';
import Write from '@src/assets/icons/write';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Header from '@src/modules/header/index';
import ScrollList from '@src/modules/list/scroll';
import PostCardReviewNarrow from '@src/components/post-list/card/narrow/review/index';
import PostCardLookNarrow from '@src/components/post-list/card/narrow/look/index';
import PostCardWide from './card/wide';

export const REVIEW = '리뷰';
export const LOOK = 'LOOK';
export const WIDE = 'WIDE';
export const NARROW = 'NARROW';
const HEADER_MAX_HEIGHT = rem(126);
const HEADER_MIN_HEIGHT = rem(111);

const items = [{label: '리뷰'}, {label: 'LOOK'}];

const icons = [
  {Icon: Write, fill: colors.primary},
  {Icon: Search, fill: colors.primary},
];

export default function PostListScreen() {
  const [scrollY] = useState(new Animated.Value(0));
  const [view, setView] = useState(WIDE);
  const [postType, setPostType] = useState(REVIEW);
  const [filter, setFilter] = useState(false);
  const [recommend, setRecommend] = useState(false);

  const PostListItem =
    view === WIDE
      ? PostCardWide
      : postType === REVIEW
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

  return (
    <Wrapper>
      <Header
        title="포스트"
        height={headerHeight}
        titleSize={titleSize}
        titlePadding={titlePadding}
        items={items}
        icons={icons}
        viewControl={{view, setView}}
        postTypeControl={{postType, setPostType}}
        filterControl={{filter, setFilter}}
        recommendControl={{recommend, setRecommend}}
      />
      <ScrollList
        query={ALL_RECOMMEND_POSTS}
        category="allRecommendPosts"
        ListItem={PostListItem}
        numColumns={postType === LOOK && view === NARROW ? 2 : 1}
        headerMaxHeight={HEADER_MAX_HEIGHT}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {y: scrollY}}},
        ])}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
  backgroundColor: colors.white,
});

const ALL_RECOMMEND_POSTS = gql`
  query recPost($start: Int!, $first: Int!) {
    allRecommendPosts(
      recommendPostOption: {
        filterGeneral: {start: $start, first: $first}
        postFilter: {}
      }
    ) {
      id
      accountId
      name
      profileImageUrl
      title
      titleType
      titleImageUrl
      titleYoutubeUrl
      time
      pickCount
      viewCount
      commentCount
      simpleItemList {
        brandKor
        imageUrl
      }
    }
  }
`;
