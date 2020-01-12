import React from 'react';
import styled from 'styled-components/native';

import Accessory from '@src/assets/icons/item/category/accessory';
import Bag from '@src/assets/icons/item/category/bag';
import Bottom from '@src/assets/icons/item/category/bottom';
import Outer from '@src/assets/icons/item/category/outer';
import Shoes from '@src/assets/icons/item/category/shoes';
import Top from '@src/assets/icons/item/category/top';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useItemFilterContext} from '@src/context/filter';
import {itemCateEnToKo, itemCate} from '@src/data/item';
import Text from '@src/modules/atoms/text';

const MAJOR_CATE = [
  {icon: Outer, iconWidth: rem(37), iconHeight: rem(35), name: 'OUTER'},
  {icon: Top, iconWidth: rem(36), iconHeight: rem(34), name: 'TOP'},
  {icon: Bottom, iconWidth: rem(25), iconHeight: rem(34), name: 'BOTTOM'},
  {icon: Shoes, iconWidth: rem(33), iconHeight: rem(16), name: 'SHOES'},
  {icon: Bag, iconWidth: rem(27), iconHeight: rem(22), name: 'BAG'},
  {icon: Accessory, iconWidth: rem(21), iconHeight: rem(34), name: 'ACCESSORY'},
];

export default function MajorFilter() {
  const itemtFilterContext = useItemFilterContext();
  const {
    setItemMajorType,
    setItemMinorType,
    setItemFinalType,
  } = itemtFilterContext.action;

  const handleChange = major => {
    setItemMajorType(major);
    setItemMinorType(itemCate[major][0]);
    setItemFinalType('ALL');
  };

  return (
    <Wrapper>
      {MAJOR_CATE.map((item, index) => (
        <MajorCateNode
          key={index}
          Icon={item.icon}
          width={item.iconWidth}
          height={item.iconHeight}
          name={item.name}
          onPress={() => {
            handleChange(item.name);
          }}
        />
      ))}
    </Wrapper>
  );
}

const MajorCateNode = ({Icon, width, height, name, onPress}) => {
  return (
    <Touchable onPress={onPress}>
      <MajorCateWrapper>
        <IconWrapper>
          <Icon style={{width, height}} />
        </IconWrapper>
        <Text>{itemCateEnToKo[name]}</Text>
      </MajorCateWrapper>
    </Touchable>
  );
};

const Touchable = styled.TouchableWithoutFeedback({});

const Wrapper = styled.View({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: rem(25),
  paddingTop: rem(9),
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});

const MajorCateWrapper = styled.View({
  width: rem(40),
  height: rem(52),
  alignItems: 'center',
});

const IconWrapper = styled.View({
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: rem(2),
});
