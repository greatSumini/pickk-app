import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import styled from 'styled-components/native';

const Touchable =
  Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback;

export default styled(Touchable)({});
