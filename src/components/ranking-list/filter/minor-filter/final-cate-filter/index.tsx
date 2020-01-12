import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';

import rem from '@src/constants/rem';
import {useSortContext} from '@src/context/filter';
import Space from '@src/modules/atoms/space';
import CategoryButton from './category-button';
import OptionButton from './option-button';
import ChevronDown from '@src/assets/icons/chevron/down';
import colors from '@src/constants/colors';

export default function FinalCateFilter() {
  const sortContext = useSortContext();
  const {sort} = sortContext.state;
  const {setSort} = sortContext.action;

  const sortItems = [
    {
      label: '가격순',
      value: 'price',
    },
  ];

  return (
    <Wrapper>
      <Row>
        <OptionButton />
        <Space direction="ROW" />
        <CategoryButton />
      </Row>
      <RNPickerSelect
        placeholder={{
          label: '추천순',
          value: 'rankScore',
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={value => setSort(value)}
        items={sortItems}
        style={{
          inputIOS: {
            fontSize: rem(10),
            paddingRight: rem(12),
          },
          inputAndroid: {
            fontSize: rem(10),
            paddingRight: rem(12),
          },
          placeholder: {
            color: 'black',
          },
          iconContainer: {
            top: rem(13),
          },
        }}
        value={sort}
        Icon={() => {
          return (
            <ChevronDown
              style={{width: rem(10), height: rem(10)}}
              fill={colors.primary}
            />
          );
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(36),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingLeft: rem(12),
  paddingRight: rem(16),
});

const Row = styled.View({
  flexDirection: 'row',
});
