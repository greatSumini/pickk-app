import React, {useState} from 'react';

import Board from './board';
import MoreButton from './more-button';

export const PAGE_NUM = 5;

export default function RecommendLook() {
  const [current, setCurrent] = useState(0);

  const {data} = {data: null}; //useQuery(GET_HOT_LOOK_LIST);

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
