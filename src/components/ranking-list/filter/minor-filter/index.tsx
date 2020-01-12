import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import FinalCateFilter from './final-cate-filter';
import MinorCateNav from './minor-cate-nav';

export default function MajorFilter() {
  return (
    <Wrapper>
      <MinorCateNav />
      <FinalCateFilter />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});
