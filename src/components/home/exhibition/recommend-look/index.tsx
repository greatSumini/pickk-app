import React from 'react';

import withExhibition from '../with-exhibition';
import RecommendLookProps from './props';

import Board from './board';
import MoreButton from './more-button';

function RecommendLook(props: RecommendLookProps) {
  return (
    <>
      <Board {...props.board} />
      <MoreButton {...props.moreButton} />
    </>
  );
}

export default withExhibition(RecommendLook);
