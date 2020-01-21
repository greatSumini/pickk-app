import React from 'react';

import FilterIcon from '@src/assets/icons/filter';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import FilterItem from '@src/modules/atoms/buttons/filter/filter-item';
import IconText from '@src/modules/molecules/icon-text';

export default function FilterButton() {
  const filterColor = colors.primary;
  const filterBackColor = colors.white;

  return (
    <FilterItem onPress={() => {}} style={{backgroundColor: filterBackColor}}>
      <IconText
        Icon={FilterIcon}
        width={rem(11)}
        height={rem(9)}
        content='필터'
        fill={filterColor}
        textColor={filterColor}
        level={0}
      />
    </FilterItem>
  );
}
