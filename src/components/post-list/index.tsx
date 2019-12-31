import React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import PostCardWide from './card/wide';
import colors from '@src/constants/colors';
import ScrollList from '@src/modules/list/scroll';

export default function PostListScreen() {
  return (
    <Wrapper>
      <ScrollList
        query={ALL_RECOMMEND_POSTS}
        category="allRecommendPosts"
        ListItem={PostCardWide}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
  backgroundColor: colors.lightGrey,
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
