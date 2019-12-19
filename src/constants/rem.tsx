import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export default num => (num * width) / 360;
