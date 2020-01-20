import React from 'react';
import styled from 'styled-components/native';

import PostFilter from './post';
import ItemFilter from './item';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

type FilterWrapperProps = {
  children: React.ReactNode;
};

export default function Filter({navType, id}) {
  return navType === 'POST' ? (
    <FilterWrapper>
      <PostFilter id={id} />
    </FilterWrapper>
  ) : (
    <FilterWrapper>
      <ItemFilter id={id} />
    </FilterWrapper>
  );
}

function FilterWrapper({children}: FilterWrapperProps) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(36),
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: rem(12),
  justifyContent: 'space-between',
});
