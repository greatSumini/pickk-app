import React, {useState} from 'react';

import SortIcon from '@src/assets/icons/sort';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';

import {useFilterContext} from '@src/context/filter';
import IconText from '@src/modules/molecules/icon-text';
import BottomDrawer from '@src/modules/navigation/drawer/bottom';
import SortSelecter from './sort-selecter';
import ApplyButton from '../apply-button';
import {FilterItem} from '../option-button';

export default function SortButton() {
  const filterContext = useFilterContext();
  const {sortOption} = filterContext.state;
  const [visible, setVisible] = useState(false);

  const filterColor = sortOption ? colors.white : colors.primary;
  const filterBackColor = sortOption ? colors.primary : colors.white;

  const DrawerData = [
    {title: '정렬', component: <SortSelecter />},
    {
      component: (
        <ApplyButton setVisible={setVisible} buttonText="정렬 적용하기" />
      ),
    },
  ];

  return (
    <FilterItem
      onPress={() => {
        setVisible(true);
      }}
      style={{backgroundColor: filterBackColor}}>
      <IconText
        Icon={SortIcon}
        width={rem(11)}
        height={rem(9)}
        content="정렬"
        fill={filterColor}
        textColor={filterColor}
        level={0}
      />
      <BottomDrawer
        visible={visible}
        setVisible={v => {
          setVisible(v);
        }}
        data={DrawerData}
      />
    </FilterItem>
  );
}
