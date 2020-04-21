import {ImageSourcePropType, StyleProp, ImageStyle} from 'react-native';

type ProfileImageProps = {
  source: ImageSourcePropType;
  size: number;
  edit: boolean;
  style?: StyleProp<ImageStyle>;
};
