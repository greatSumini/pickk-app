import {StyleProp, Animated, ViewStyle} from 'react-native';

type HeaderProps = {
  title: string;
  style?: StyleProp<ViewStyle>;
  height: Animated.AnimatedInterpolation;
  titleSize: Animated.AnimatedInterpolation;
  titlePadding: Animated.AnimatedInterpolation;
  items?: {label: string}[];
  icons?: {Icon: React.ElementType; fill?: string}[];
  viewControl?: {
    view: string;
    setView: React.Dispatch<React.SetStateAction<string>>;
  };
  postTypeControl?: {
    postType: string;
    setPostType: React.Dispatch<React.SetStateAction<string>>;
  };
  filterControl?: {
    filter: boolean;
    setFilter: React.Dispatch<React.SetStateAction<boolean>>;
  };
  recommendControl?: {
    recommend: boolean;
    setRecommend: React.Dispatch<React.SetStateAction<boolean>>;
  };
};

export default HeaderProps;
