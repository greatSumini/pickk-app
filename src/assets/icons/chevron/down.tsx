import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {IconProps} from '../icons';
import {BLACK, rem} from '@src/constants';

export default function ChevronDownIcon({style, fill = BLACK}: IconProps) {
  return (
    <Svg
      style={{width: rem(24), height: rem(24), ...(style as object)}}
      viewBox='0 0 24 24'>
      <Path
        fill={fill}
        d='M12 13.6L6.7 8.3c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l6 6c.4.4 1 .4 1.4 0l6-6c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0L12 13.6z'
      />
    </Svg>
  );
}
