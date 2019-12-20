import React from 'react';
import styled from 'styled-components/native';
import rem from '@src/constants/rem';

import TabBarProps from './props';

import TabBarButton from './button';

export default function TabBar(props: TabBarProps) {
  return (
    <Wrapper>
      {props.data.map(v => (
        <TabBarButton {...v} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  paddingHorizontal: rem(12),
  flexDirection: 'row',
  justifyContent: 'space-between',
});
