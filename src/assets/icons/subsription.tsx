import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M16.7 3c1.2 0 2.3.7 2.7 1.8l3.5 7.8v.1-.1s0 .1.1.2V18c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3v-5.1-.1-.1-.1l3.5-7.8C5 3.7 6.1 3 7.3 3h9.4zM3 18c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-4h-4.5l-1.7 2.6c-.2.2-.5.4-.8.4h-4c-.3 0-.6-.2-.8-.4L7.5 14H3v4zM16.7 5H7.3c-.4 0-.8.2-.9.6L3.5 12H8c.3 0 .6.1.8.3l.1.1 1.7 2.6h2.9l1.7-2.6c.2-.3.5-.4.8-.4h4.5l-2.8-6.4c-.2-.4-.6-.6-1-.6z"
    />
  </Svg>
);
