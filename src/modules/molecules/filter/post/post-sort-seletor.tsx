import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import ChevronDown from '@src/assets/icons/chevron/down';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useSortContext} from '@src/context/filter';

export default function PostSortSelector() {
  const sortContext = useSortContext();
  const {sortOption} = sortContext.state;
  const {setSortOption} = sortContext.action;

  const sortItems = [
    {
      label: '추천순',
      value: {sortBy: 'pickCount', sort: 'DESC'},
    },
  ];

  return (
    <RNPickerSelect
      placeholder={{
        label: '최신순',
        value: {sortBy: 'time', sort: 'DESC'},
      }}
      useNativeAndroidPickerStyle={false}
      onValueChange={value => {
        setSortOption(value);
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
      value={sortOption}
      Icon={() => {
        return (
          <ChevronDown
            style={{width: rem(10), height: rem(10)}}
            fill={colors.primary}
          />
        );
      }}
    />
  );
}
