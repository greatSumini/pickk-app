import React from 'react';
import {ScrollView} from 'react-native';
import {useQuery} from 'react-apollo';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import PostViewHeader from './header';
import PostViewScreenProps from './props';
import Text from '@src/modules/atoms/text';

export default function PostView(props: PostViewScreenProps) {
  const postId = props.navigation.getParam('id');

  const {loading, error, data} = useQuery(GET_POST, {
    variables: {
      postId,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
    ssr: true,
  });

  if (loading) {
    return <Text>Loading....</Text>;
  }

  if (error) {
    return <Text>{`Error! ${error}`}</Text>;
  }

  if (data && data.allRecommendPosts && data.allRecommendPosts[0]) {
    const {
      titleType,
      accountId,
      name,
      title,
      content,
      pickCount,
      viewCount,
      commentCount,
      titleImageUrl,
      titleYoutubeUrl,
      time,
      postType,
      reviews,
    } = data.allRecommendPosts[0];

    return (
      <Wrapper>
        <ScrollView style={{flex: 1}}>
          <PostViewHeader
            type={titleType}
            src={titleImageUrl}
            videoId={titleYoutubeUrl}
            {...{title, content, viewCount, time}}
          />
        </ScrollView>
      </Wrapper>
    );
  }
  return <Text>비정상적인 접근입니다.</Text>;
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
});

const GET_POST = gql`
  query recPost($postId: Int!) {
    allRecommendPosts(
      recommendPostOption: {
        filterGeneral: {start: 0, first: 1}
        postFilter: {postId: $postId, minimumPickCount: 0}
      }
    ) {
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
