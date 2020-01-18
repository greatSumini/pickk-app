import React from 'react';
import styled from 'styled-components/native';

import CoatIcon from '@src/assets/icons/item/category/minor/coat';
import ShortPaddingIcon from '@src/assets/icons/item/category/minor/short-padding';
import KnitIcon from '@src/assets/icons/item/category/minor/knit';
import JeansIcon from '@src/assets/icons/item/category/minor/jeans';
import MyPickkIcon from '@src/assets/icons/my-pickk';
import QuickMenuButton from './button';

export default function QuickMenu() {
  return (
    <Wrapper>
      {quickMenuButtonEntries.map(item => (
        <QuickMenuButton key={item.label} {...item} />
      ))}
    </Wrapper>
  );
}

const quickMenuButtonEntries = [
  {
    Icon: CoatIcon,
    width: 33,
    height: 35,
    label: '코트',
  },
  {
    Icon: ShortPaddingIcon,
    width: 30,
    height: 30,
    label: '패딩',
  },
  {
    Icon: KnitIcon,
    width: 34,
    height: 33,
    label: '니트',
  },
  {
    Icon: JeansIcon,
    width: 24,
    height: 33,
    label: '청바지',
  },
  {
    Icon: MyPickkIcon,
    width: 30,
    height: 32,
    label: '마이 핔',
  },
];

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 14,
});
