import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

const TouchableCmp =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default TouchableCmp;
