import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useItemFilterContext} from '@src/context/filter';
import {itemCate, itemCateEnToKo} from '@src/data/item';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';

export default function CategorySelector({setVisible}) {
  const itemtFilterContext = useItemFilterContext();
  const {
    itemFinalType: finalType,
    itemMinorType: minorType,
  } = itemtFilterContext.state;
  const {setItemFinalType} = itemtFilterContext.action;

  const handleChange = value => {
    setItemFinalType(value);
    setVisible(false);
  };

  if (itemCate[minorType]) {
    return itemCate[minorType].map((v, i) => (
      <DrawerItem
        key={i}
        selected={finalType === v}
        onPress={() => {
          handleChange(v);
        }}>
        {itemCateEnToKo[v]}
      </DrawerItem>
    ));
  } else {
    return <></>;
  }
}

function DrawerItem({children, selected, onPress}) {
  return (
    <Touchable onPress={onPress}>
      <DrawerItemWrapper selected={selected}>
        <Text
          level={1}
          fontWeight={500}
          color={selected ? colors.white : colors.primary}>
          {children}
        </Text>
      </DrawerItemWrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({});

const DrawerItemWrapper = styled.View<{selected: boolean}>(props => ({
  width: '100%',
  height: rem(44),
  backgroundColor: props.selected ? colors.primary : colors.white,
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
  justifyContent: 'center',
  alignItems: 'center',
}));
