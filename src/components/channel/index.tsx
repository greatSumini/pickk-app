import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import Header from './header';
import Filter from './filter';
import Item from './item';
import {PostFilterContext, SortContext} from '@src/context/filter';
import PostListCardWide from '@src/components/post-list/card/wide';
import PostListCardNarrowLook from '@src/components/post-list/card/narrow/look';
import ScrollList from '@src/modules/list/scroll';
import NavigationBar from '@src/modules/navigation/bar';

const items = ['포스트', '아이템'];

const DEFAULT_SORT_OPTION = {
  sort: 'DESC',
  sortBy: 'time',
};

const CATEGORY = ['POST', 'ITEM'];

export default function Channel(props) {
  const id = 148;
  const [navType, setNavType] = useState<'POST' | 'ITEM'>('POST');
  const [postType, setPostType] = useState<'REVIEW' | 'LOOK'>('REVIEW');
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);

  useEffect(() => {
    setSortOption(DEFAULT_SORT_OPTION);
    setPostType('REVIEW');
  }, [navType]);

  const postTypeStore = {
    state: {postType},
    action: {setPostType},
  };

  const sortStore = {
    state: {
      sortOption,
    },
    action: {
      setSortOption,
    },
  };

  const querySelector = () => {
    if (navType === 'POST') {
      return GET_RECOMMENDLIST;
    } else {
      return GET_REVIEWLIST;
    }
  };

  const categorySelector = () => {
    if (navType === 'POST') {
      return 'allRecommendPosts';
    } else {
      return 'allItemReviews';
    }
  };

  const listItemSelector = () => {
    if (navType === 'POST') {
      if (postType === 'REVIEW') {
        return PostListCardWide;
      } else {
        return PostListCardNarrowLook;
      }
    } else {
      return Item;
    }
  };

  const filterSelector = () => {
    if (navType === 'POST') {
      return {
        postType,
      };
    }
  };

  return (
    <Wrapper>
      <PostFilterContext.Provider value={postTypeStore}>
        <SortContext.Provider value={sortStore}>
          <ScrollList
            ListHeader={
              <ListHeader
                id={id}
                navType={navType}
                setNavType={setNavType}
                navigation={props.navigation}
              />
            }
            query={querySelector()}
            category={categorySelector()}
            ListItem={listItemSelector()}
            numColumns={postType === 'LOOK' ? 2 : 1}
            filter={{
              id,
              sort: sortOption.sort,
              sortBy: sortOption.sortBy,
              ...filterSelector(),
            }}
          />
        </SortContext.Provider>
      </PostFilterContext.Provider>
    </Wrapper>
  );
}

function ListHeader({id, navigation, navType, setNavType}) {
  return (
    <>
      <Header id={id} navigation={navigation} />
      <NavigationBar
        items={items}
        navControl={{value: navType, setValue: setNavType}}
        category={CATEGORY}
      />
      <Filter navType={navType} id={id} />
    </>
  );
}

const Wrapper = styled.SafeAreaView({flex: 1});

export const GET_RECOMMENDLIST = gql`
  query recPost(
    $start: Int!
    $first: Int!
    $id: Int!
    $postType: RecommendPostType!
    $sortBy: RecPostSortableField
  ) {
    allRecommendPosts(
      recommendPostOption: {
        filterGeneral: {start: $start, first: $first, sortBy: $sortBy}
        postFilter: {accountId: $id, minimumPickCount: 0, postType: $postType}
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

export const GET_REVIEWLIST = gql`
  query getReview(
    $start: Int!
    $first: Int!
    $id: Int!
    $sortBy: ReviewSortableField
  ) {
    allItemReviews(
      reviewOption: {
        filterGeneral: {start: $start, first: $first, sortBy: $sortBy}
        reviewFilter: {userId: $id}
      }
    ) {
      id
      recommendReason
      shortReview
      score
      itemInfo {
        id
        brandKor
        name
        originalPrice
        salePrice
        imageUrl
        averageScore
        pickCount
      }
      userInfo {
        name
        profileImageUrl
        id
      }
    }
  }
`;
