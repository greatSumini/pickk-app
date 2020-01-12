import React, {useContext} from 'react';
import {Picker} from 'react-native';
import styled from 'styled-components/native';

import rem from '@src/constants/rem';
import {SortContext} from '@src/context/filter';
import Space from '@src/modules/atoms/space';
import CategoryButton from './category-button';
import OptionButton from './option-button';

export default function FinalCateFilter() {
  const sortData = useContext(SortContext);
  const {sort} = sortData.state;
  const {setSort} = sortData.action;

  return (
    <Wrapper>
      <OptionButton />
      <Space direction="ROW" />
      <CategoryButton />
      <Space direction="ROW" level={10} />

      <Picker
        selectedValue={sort}
        onValueChange={itemValue => {
          setSort(itemValue);
        }}
        style={{width: rem(80), height: rem(15)}}
        itemStyle={{height: rem(15)}}>
        <Picker.Item label="가격순" value="price" />
        <Picker.Item label="기본" value="rankScore" />
      </Picker>
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
});
