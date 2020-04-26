import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function ThumbUpIcon({fillOut, fillLeft, fillRight, style}) {
  return (
    <Svg style={style} viewBox='0 0 20 20'>
      <Path
        fill={fillOut}
        d='M16.4 6.7h-3.9V4.2C12.5 2.4 11 .9 9.2.9c-.4-.1-.7.1-.8.4l-3.1 7h-2C1.9 8.3.8 9.4.8 10.8v5.8c0 1.4 1.1 2.5 2.5 2.5h11.9c1.2 0 2.3-.9 2.5-2.1l1.2-7.5v-.4c0-1.3-1.1-2.4-2.5-2.4zm-13.9 10v-5.8c0-.5.4-.8.8-.8H5v7.5H3.3c-.4-.1-.8-.5-.8-.9zm13.6.1c-.1.4-.4.7-.8.7H6.7V9.3l3-6.8c.7.2 1.2.8 1.2 1.6v3.3c0 .5.4.8.8.8h4.8c.5.1.8.5.7.9l-1.1 7.7z'
      />
      <Path
        fill={fillRight}
        d='M16.1 16.8c-.1.4-.4.7-.8.7H6.7V9.3l3-6.8c.7.2 1.2.8 1.2 1.6v3.3c0 .5.4.8.8.8h4.8c.5.1.8.5.7.9l-1.1 7.7z'
      />
      <Path
        fill={fillLeft}
        d='M2.5 16.7v-5.8c0-.5.4-.8.8-.8H5v7.5H3.3c-.4-.1-.8-.5-.8-.9z'
      />
    </Svg>
  );
}
