import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Space from '@src/modules/atoms/space';
import Text from '@src/modules/atoms/text';
import TabBarButtonProps from './props';

const ICON_SIZE = rem(20);

export default function TabBarButton({
  title,
  route,
  Icon,
  navigation,
  currentRouteName,
}: TabBarButtonProps) {
  const selected: boolean = currentRouteName === route;

  return (
    <Touchable
      onPress={() => {
        navigation.navigate(route);
      }}>
      <Wrapper>
        <Icon
          style={{width: ICON_SIZE, height: ICON_SIZE}}
          fillIn={selected ? colors.primary : colors.white}
          fillOut={selected ? colors.primary : colors.secondary}
          fill={selected ? colors.white : colors.secondary}
        />
        <Space direction="COL" />
        <Text level={-1} color={selected ? colors.primary : colors.secondary}>
          {title}
        </Text>
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled.TouchableWithoutFeedback({
  width: rem(48),
  height: rem(48),
});

const Wrapper = styled.View({
  width: rem(48),
  height: rem(48),
  paddingTop: rem(6),
  alignItems: 'center',
});
