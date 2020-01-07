import {StyleProp, Animated, ViewStyle} from 'react-native';

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
  items?: {label: string}[];
  icons?: {Icon: React.ElementType; fill?: string}[];
  viewControl?: HeaderControlType<string>;
  postTypeControl?: HeaderControlType<string>;
  filterControl?: HeaderControlType<boolean>;
  recommendControl?: HeaderControlType<boolean>;
};

export default HeaderProps;
