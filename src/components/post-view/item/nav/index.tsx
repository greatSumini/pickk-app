import React from 'react';
import styled from 'styled-components/native';
import {ScrollView} from 'react-native';

import ItemNavButton from './button';
import Text from '@src/modules/atoms/text';

import {ItemInfo} from '@src/modules/types/ItemInfo';
import rem from '@src/constants/rem';
import Space from '@src/modules/atoms/space';

export type PostViewItemNavProps = {
  items: Array<
    Pick<ItemInfo, 'brandKor' | 'imageUrl' | 'originalPrice' | 'salePrice'>
  >;
  current: number;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

export default function PostViewItemNav({
  items,
  current,
  setCurrent,
}: PostViewItemNavProps) {
  const handleButtonClick = (index: number) => () => {
    setCurrent(index);
  };

  return (
    <Wrapper>
      <Space level={1} />
      <Text level={4} fontWeight='bold' style={{marginLeft: rem(16)}}>
        총 {items.length}개의 아이템
      </Text>
      <Space size={8} />
      <Row horizontal>
        {items.map((item, index) => (
          <ItemNavButton
            key={JSON.stringify(item)}
            {...item}
            selected={current === index}
            onClick={handleButtonClick(index)}
          />
        ))}
      </Row>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
});

const Row = styled.ScrollView({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  paddingHorizontal: rem(16),
});
