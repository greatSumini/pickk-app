import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, ViewStyle} from 'react-native';

import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

type FilterItemProps = {
  children?: React.ReactNode;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export default function FilterItem({children, onPress}: FilterItemProps) {
  return <Button onPress={onPress}>{children}</Button>;
}

const Button = styled.TouchableOpacity({
  paddingVertical: rem(4),
  paddingHorizontal: rem(8),
  borderRadius: rem(20),
  borderWidth: rem(1),
  borderColor: colors.lightGrey,
  flexDirection: 'row',
  alignItems: 'center',
});
