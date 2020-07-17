import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from './icons';
import {BLACK} from '@src/constants';

export default function XIcon({style, fill = BLACK}: IconProps) {
  return (
    <Svg style={style} viewBox='0 0 11 11'>
      <Path
        fill={fill}
        d='M13.4,12l3.8-3.8a.99.99,0,0,0-1.4-1.4L12,10.6,8.2,6.8A.99.99,0,0,0,6.8,8.2L10.6,12,6.8,15.8a.967.967,0,0,0,0,1.4,1.08,1.08,0,0,0,.7.3,1.08,1.08,0,0,0,.7-.3L12,13.4l3.8,3.8a.967.967,0,0,0,1.4,0,.967.967,0,0,0,0-1.4Z'
        transform='translate(-6.5 -6.5)'
      />
    </Svg>
  );
}
