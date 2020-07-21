import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from './icons';
import {BLACK, rem} from '@src/constants';

export default function SecretIcon({style, fill = BLACK}: IconProps) {
  return (
    <Svg
      viewBox='0 0 10 12'
      style={{width: rem(10), height: rem(12), ...(style as object)}}>
      <Path
        fill={fill}
        d='M3.6,3.6c0.1-1.2,0.4-1.7,0.7-2c0.3-0.3,0.6-0.3,0.7-0.3h0c0,0,0.1,0,0.1,0c0,0,0.4,0,0.7,0.3
     c0.3,0.3,0.6,0.8,0.7,2H3.6z M5.4,7.9v1.6H4.6V7.9C4.2,7.7,4,7.5,4,7c0-0.6,0.5-1,1-1c0.6,0,1,0.4,1,1C6,7.5,5.8,7.7,5.4,7.9
     L5.4,7.9z M8.7,3.6H7.8c-0.1-1.4-0.5-2.4-1.2-3C6,0,5.2,0,5,0C4.8,0,4,0,3.4,0.6c-0.7,0.6-1.1,1.6-1.2,3H1.3C0.6,3.6,0,4.2,0,4.9
     v5.8C0,11.4,0.6,12,1.3,12h7.5c0.7,0,1.3-0.6,1.3-1.2V4.9C10,4.2,9.4,3.6,8.7,3.6L8.7,3.6z'
      />
    </Svg>
  );
}
