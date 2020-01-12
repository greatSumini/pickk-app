import React from 'react';

import NarrowLookIcon from '@src/assets/icons/narrow-look';
import NarrowReviewIcon from '@src/assets/icons/narrow-review';
import WideIcon from '@src/assets/icons/wide';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';

import {useFilterContext} from '@src/context/filter';

import IconButton from '@src/modules/atoms/buttons/icons';
import {WIDE, NARROW, REVIEW} from '../..';

type ViewButtonProps = {
  postType: '리뷰' | 'LOOK';
};

export default function ViewButton({postType}: ViewButtonProps) {
  const filterContext = useFilterContext();
  const {view} = filterContext.state;
  const {setView} = filterContext.action;

  const ViewFilterIcon =
    view === WIDE
      ? WideIcon
      : postType === REVIEW
      ? NarrowReviewIcon
      : NarrowLookIcon;

  return (
    <IconButton
      Icon={ViewFilterIcon}
      size={rem(18)}
      onPress={() => {
        setView(view === WIDE ? NARROW : WIDE);
      }}
      fill={colors.viewFilter}
      style={{position: 'absolute', right: rem(20)}}
    />
  );
}
