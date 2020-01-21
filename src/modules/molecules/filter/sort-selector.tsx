import React from 'react';
import RNPickerSelect from 'react-native-picker-select';

import ChevronDown from '@src/assets/icons/chevron/down';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useSortContext} from '@src/context/filter';

type SortSelectorProps = {
  sortItems: {
    label: string;
    value: {
      sort: string;
      sortBy: string;
    };
  }[];
};

export default function SortSelector({sortItems}: SortSelectorProps) {
  const sortContext = useSortContext();
  const {sortOption} = sortContext.state;
  const {setSortOption} = sortContext.action;

  return (
    <RNPickerSelect
      placeholder={sortItems[0]}
      useNativeAndroidPickerStyle={false}
      onValueChange={value => {
        setSortOption(value);
      }}
      items={sortItems.slice(1, sortItems.length)}
      style={{
        inputIOS: {
          width: rem(70),
          fontSize: rem(10),
          textAlign: 'right',
          paddingRight: rem(12),
        },
        inputAndroid: {
          width: rem(70),
          fontSize: rem(10),
          textAlign: 'right',
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
