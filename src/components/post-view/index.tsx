import React from 'react';
import styled from 'styled-components/native';
import {useRoute, RouteProp} from '@react-navigation/native';

import Header, {PostViewHeaderProps} from './header';
import Item, {PostViewItemProps} from './item';
import {WHITE} from '@src/constants/colors';

import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';
import {RecommendPost} from '@src/modules/types/RecommendPost';

export default function PostView() {
  const route = useRoute<RouteProp<AppStackParams, 'PostView'>>();
  const {data} = {
    data: null,
  }; /*useQuery<{allRecommendPosts: RecommendPost[]}>(GET_POST, {
    variables: {
      id: route.params.id,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-first',
  });*/

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
