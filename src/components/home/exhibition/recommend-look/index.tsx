import React, {useState} from 'react';

import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Board from './board';
import MoreButton from './more-button';

export const PAGE_NUM = 5;

export default function RecommendLook() {
  const [current, setCurrent] = useState(0);

  const {data} = useQuery(GET_HOT_LOOK_LIST);

  const handleMoreButtonClick = () => {
    setCurrent((current + 1) % PAGE_NUM);
  };

  if (data && data.allRecommendPosts) {
    return (
      <>
        <Board current={current} cards={data.allRecommendPosts} />
        <MoreButton current={current} onPress={handleMoreButtonClick} />
      </>
    );
  }
  return <></>;
}

const GET_HOT_LOOK_LIST = gql`
  query recPost {
    allRecommendPosts(
      recommendPostOption: {
        filterGeneral: {start: 0, first: 20}
        postFilter: {postType: LOOK}
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
