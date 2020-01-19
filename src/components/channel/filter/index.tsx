import React from 'react';
import styled from 'styled-components/native';

import PostFilter from './post';
import ItemFilter from './item';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

export default function Filter({navType, id}) {
  return navType === 'POST' ? <PostFilter id={id} /> : <ItemFilter id={id} />;
}

export const FilterWrapper = styled.View({
  width: '100%',
  height: rem(36),
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: rem(12),
  justifyContent: 'space-between',
});
