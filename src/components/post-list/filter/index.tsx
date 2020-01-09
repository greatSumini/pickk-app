import React, {useContext} from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import FilterContext from '@src/context/filter';
import Space from '@src/modules/atoms/space';
import SortButton from './sort-button';
import MinPickButton from './min-pick-button';
import OptionButton from './option-button';
import FilterProps from './props';
import ViewButton from './view-button/index';

export default function PostListFilter({postType}: FilterProps) {
  const filterData = useContext(FilterContext);
  const {option} = filterData.state;

  return (
    <Wrapper>
      <OptionButton />
      <Space direction="ROW" />
      <MinPickButton />
      <Space direction="ROW" />
      {option && <SortButton />}
      <ViewButton postType={postType} />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(36),
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: rem(12),
  paddingRight: rem(16),
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});
