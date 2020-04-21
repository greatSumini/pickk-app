import React from 'react';
import styled from 'styled-components/native';

import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

type FilterWrapperProps = {
  children: React.ReactNode;
};

export default function FilterWrapper({children}: FilterWrapperProps) {
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
