import React from 'react';
import styled from 'styled-components/native';
import {useRoute, RouteProp} from '@react-navigation/native';

import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';

import {NavigationDrawerProp} from 'react-navigation-drawer';
import Header, {PostViewHeaderProps} from './header';
import Item, {PostViewItemProps} from './item';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app.d.ts';
import {RecommendPost} from '@src/modules/types/RecommendPost';
import Text from '@src/modules/atoms/text';
import {WHITE} from '@src/constants/colors';

export type PostViewScreenProps = {
  navigation: NavigationDrawerProp;
};

export default function PostView(props: PostViewScreenProps) {
  const route = useRoute<RouteProp<AppStackParams, 'PostView'>>();
  const {data} = useQuery<{allRecommendPosts: RecommendPost[]}>(GET_POST, {
    variables: {
      id: route.params.id,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
  });

  if (data?.allRecommendPosts[0]) {
    const recommendPost = data.allRecommendPosts[0];
    return (
      <Wrapper>
        <Header {...(recommendPost as PostViewHeaderProps)} />
        <Item {...(recommendPost as PostViewItemProps)} />
      </Wrapper>
    );
  }
  return null;
}

const Wrapper = styled.ScrollView({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: WHITE,
});

const GET_POST = gql`
  query recPost($id: Int!) {
    allRecommendPosts(
      recommendPostOption: {
        filterGeneral: {start: 0, first: 1}
        postFilter: {postId: $id, minimumPickCount: 0}
      }
    ) {
      id
      accountId
      name
      profileImageUrl
      title
      content
      titleType
      titleImageUrl
      titleYoutubeUrl
      time
      pickCount
      viewCount
      commentCount
      postType
      reviews {
        id
        recommendReason
        shortReview
        review
        score
        images {
          imageUrl
        }
        userInfo {
          id
          name
          profileImageUrl
        }
        itemInfo {
          id
          name
          brandKor
          originalPrice
          salePrice
          imageUrl
          purchaseUrl
          averageScore
          pickCount
        }
      }
    }
  }
`;
