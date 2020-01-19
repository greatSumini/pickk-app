import React from 'react';
import styled from 'styled-components/native';
import rem from '@src/constants/rem';

import {width} from '@src/constants/dimensions';
import NavigationBarProps from './props';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import colors from '@src/constants/colors';

export default function NavigationBar({
  items,
  navControl,
  category,
}: NavigationBarProps) {
  return <Wrapper>{NavItem({items, navControl, category})}</Wrapper>;
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(36),
  flexDirection: 'row',
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});

function NavItem({items, navControl, category}: NavigationBarProps) {
  return items.map((item, index) => {
    const title = item;
    const selected = category[index] === navControl.value;

    return (
      <Touchable
        key={title}
        onPress={() => {
          navControl.setValue(category[index]);
        }}>
        <NavItemWrapper
          style={{width: width / items.length}}
          selected={selected}>
          <Text level={2} color={selected ? colors.primary : colors.secondary}>
            {title}
          </Text>
        </NavItemWrapper>
      </Touchable>
    );
  });
}

const NavItemWrapper = styled.View<{selected: boolean}>(({selected}) => ({
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  borderBottomWidth: selected && rem(2),
  borderBottomColor: selected && colors.primary,
}));

const Touchable = styled(TouchableCmp)({});
