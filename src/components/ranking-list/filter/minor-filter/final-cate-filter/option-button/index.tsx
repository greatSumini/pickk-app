import React, {useState} from 'react';
import styled from 'styled-components/native';
import {FilterItem} from '@src/components/post-list/filter/option-button';
import FilterIcon from '@src/assets/icons/filter';
import IconText from '@src/modules/molecules/icon-text';
import rem from '@src/constants/rem';
import {useRankFilterDrawerContext} from '@src/context/filter';
import colors from '@src/constants/colors';
import BottomDrawer from '@src/modules/navigation/drawer/bottom';

export default function OptionButton() {
  const [visible, setVisible] = useState(false);
  const rankFilterDrawerContext = useRankFilterDrawerContext();
  const {priceOption} = rankFilterDrawerContext.state;

  const filterColor = priceOption ? colors.white : colors.primary;
  const filterBackColor = priceOption ? colors.primary : colors.white;

  const drawerData = [{title: '가격', component: <BottomPrice />}];

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
        setVisible={setVisible}
        data={drawerData}
      />
    </FilterItem>
  );
}

const BottomPrice = styled.View({});
