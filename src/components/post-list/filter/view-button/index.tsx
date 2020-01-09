import React, {useContext} from 'react';

import NarrowLookIcon from '@src/assets/icons/narrow-look';
import NarrowReviewIcon from '@src/assets/icons/narrow-review';
import WideIcon from '@src/assets/icons/wide';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import FilterContext from '@src/context/filter';
import IconButton from '@src/modules/atoms/buttons/icons';
import {WIDE, NARROW, REVIEW} from '../..';

type ViewButtonProps = {
  postType: string;
};

export default function ViewButton({postType}: ViewButtonProps) {
  const filterData = useContext(FilterContext);
  const {view} = filterData.state;
  const {setView} = filterData.action;

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
