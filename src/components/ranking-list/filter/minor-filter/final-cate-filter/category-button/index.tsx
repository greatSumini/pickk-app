import React, {useContext, useState} from 'react';

import colors from '@src/constants/colors';
import {FilterItem} from '@src/components/post-list/filter/option-button';
import {ItemFilterContext} from '@src/context/filter';
import {itemCateEnToKo} from '@src/data/item';
import Text from '@src/modules/atoms/text';
import BottomDrawer from '@src/modules/navigation/drawer/bottom';
import CategorySelector from './category-selector';

export default function CategoryButton() {
  const [visible, setVisible] = useState(false);
  const itemFilterData = useContext(ItemFilterContext);
  const {itemFinalType: finalType} = itemFilterData.state;

  const categoryText =
    finalType === 'ALL' ? '카테고리' : itemCateEnToKo[finalType];
  const categoryTextColor = finalType === 'ALL' ? colors.primary : colors.white;
  const categoryBackColor = finalType === 'ALL' ? colors.white : colors.primary;

  const drawerData = [
    {
      component: <CategorySelector setVisible={setVisible} />,
    },
  ];
  return (
    <FilterItem
      onPress={() => {
        setVisible(true);
      }}
      style={{backgroundColor: categoryBackColor}}>
      <Text color={categoryTextColor}>{categoryText}</Text>
      <BottomDrawer
        visible={visible}
        setVisible={setVisible}
        data={drawerData}
        style={{paddingHorizontal: 0, paddingVertical: 0}}
      />
    </FilterItem>
  );
}
