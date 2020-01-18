import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function HamburgetIcon({style, fill}) {
  return (
    <Svg style={style} fill={fill} viewBox='0 0 24 24'>
      <Path d='M19,17c0.6,0,1,0.4,1,1s-0.4,1-1,1H6c-0.6,0-1-0.4-1-1s0.4-1,1-1H19z M19,11c0.6,0,1,0.4,1,1s-0.4,1-1,1H6    c-0.6,0-1-0.4-1-1s0.4-1,1-1H19z M19,5c0.6,0,1,0.4,1,1s-0.4,1-1,1H6C5.4,7,5,6.6,5,6s0.4-1,1-1H19z' />
    </Svg>
  );
}
