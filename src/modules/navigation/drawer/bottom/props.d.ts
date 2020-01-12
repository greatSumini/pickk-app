import {StyleProp, ViewStyle} from 'react-native';

type BottomDrawerProps = {
  visible: boolean;
  setVisible: (v) => void;
  data: {title?: string; component: any}[];
  style?: StyleProp<ViewStyle>;
};
