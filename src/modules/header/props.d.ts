import {StyleProp, Animated, ViewStyle} from 'react-native';

import HeaderIconProps from './header-icons/props';

export type HeaderControlType<T> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

type HeaderProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  height: Animated.AnimatedInterpolation;
  titleSize: Animated.AnimatedInterpolation;
  titlePadding: Animated.AnimatedInterpolation;
  icons?: HeaderIconProps[];
  children?: React.ReactNode;
};

export default HeaderProps;
