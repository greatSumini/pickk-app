import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

type IconButtonProps = {
  onPress: () => void;
  size: number;
  Icon: React.ElementType;
  fill?: string;
  fillIn?: string;
  fillOut?: string;
  fillLeft?: string;
  fillRight?: string;
  style?: StyleProp<ViewStyle>;
};

export default IconButtonProps;
