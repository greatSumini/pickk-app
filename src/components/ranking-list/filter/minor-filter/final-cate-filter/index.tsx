import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import styled from 'styled-components/native';

import ChevronDown from '@src/assets/icons/chevron/down';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useSortContext, useItemFilterContext} from '@src/context/filter';
import Space from '@src/modules/atoms/space';
import {itemCate} from '@src/data/item';
import CategoryButton from './category-button';
import OptionButton from './option-button';

export default function FinalCateFilter() {
  const sortContext = useSortContext();
  const itemFilterContext = useItemFilterContext();
  const {sort, sortBy} = sortContext.state;
  const {setSort, setSortBy} = sortContext.action;
  const {itemMinorType} = itemFilterContext.state;

  const sortValue = {
    sortBy,
    sort,
  };

  const sortItems = [
    {
      label: '높은 가격순',
      value: {sortBy: 'price', sort: 'DESC'},
    },
    {
      label: '낮은 가격순',
      value: {sortBy: 'price', sort: 'ASC'},
    },
  ];

  return (
    <Wrapper>
      <Row>
        <OptionButton />
        <Space direction="ROW" />
        {itemCate[itemMinorType] && <CategoryButton />}
      </Row>
      <RNPickerSelect
        placeholder={{
          label: '추천순',
          value: {sortBy: 'rankScore', sort: 'DESC'},
        }}
        useNativeAndroidPickerStyle={false}
        onValueChange={value => {
          setSortBy(value.sortBy);
          if (value.sort) {
            setSort(value.sort);
          }
        }}
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
        value={sortValue}
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
