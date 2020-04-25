import React from 'react';
import styled from 'styled-components/native';

import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';

import {NavigationDrawerProp} from 'react-navigation-drawer';
import PostViewHeader from './header';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app.d.ts';

export type PostViewScreenProps = {
  navigation: NavigationDrawerProp;
};

export default function PostView(props: PostViewScreenProps) {
  const route = useRoute<RouteProp<AppStackParams, 'PostView'>>();
  const {loading, error, data} = useQuery(GET_POST, {
    variables: {
      id: route.params.id,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ssr: true,
  });

  console.log(data);
  return (
    <Wrapper>
      <PostViewHeader />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
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
