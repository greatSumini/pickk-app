import React, {useState} from 'react';
import styled from 'styled-components/native';

import FilterIcon from '@src/assets/icons/filter';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useFilterContext} from '@src/context/filter';
import IconText from '@src/modules/molecules/icon-text';
import BottomDrawer from '@src/modules/navigation/drawer/bottom';
import TagSelector from '../option-button/tag-selector';
import ApplyButton from '../apply-button';

export default function OptionButton() {
  const filterContext = useFilterContext();
  const {option} = filterContext.state;
  const [visible, setVisible] = useState(false);

  const filterColor = option ? colors.white : colors.primary;
  const filterBackColor = option ? colors.primary : colors.white;

  const DrawerData = [
    {title: '태그', component: <TagSelector />},
    {
      component: (
        <ApplyButton setVisible={setVisible} buttonText="필터 적용하기" />
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
        Icon={FilterIcon}
        width={rem(11)}
        height={rem(9)}
        content="필터"
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

export const FilterItem = styled.TouchableOpacity({
  paddingVertical: rem(4),
  paddingHorizontal: rem(8),
  borderRadius: rem(20),
  borderWidth: rem(1),
  borderColor: colors.lightGrey,
  flexDirection: 'row',
  alignItems: 'center',
});
