import {ComponentType} from 'react';
import {Platform} from 'react-native';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native-gesture-handler';

// tslint:disable-next-line: no-any
const Touchable: ComponentType<any> =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default Touchable;
