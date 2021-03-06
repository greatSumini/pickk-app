import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fillOut, fillIn}) => (
  <Svg viewBox="0 0 24 22" style={style}>
    <Path
      fill={fillOut}
      d="M18.1 21.6H5.9c-.3 0-.6-.3-.6-.6V9.5l-2.2.5c-.3.1-.6-.1-.7-.4l-2-5.9c-.1-.3.1-.7.4-.8l7-2.5c.2-.1.3 0 .5 0 .2.1.3.2.3.4s.7 2.9 3.4 2.9c2.8 0 3.4-2.7 3.4-2.8 0-.2.1-.3.3-.4.2-.1.3-.1.5 0l7 2.5c.3.1.5.4.4.8l-1.9 5.9c-.1.3-.4.5-.7.4l-2.2-.5-.1 11.4c0 .3-.3.6-.6.6zM6.5 20.4h11l.1-11.6c0-.2.1-.4.2-.5.1-.1.3-.2.5-.1l2.4.5 1.6-4.9-5.8-2.1C16 3 14.6 4.8 12.1 4.8 9.6 4.8 8.2 3 7.7 1.7L1.8 3.9l1.6 4.9 2.4-.5c.2 0 .4 0 .5.1.1.1.2.3.2.5v11.5z"
    />
    <Path
      fill={fillIn}
      d="M6.5 20.4h11l.1-11.6c0-.2.1-.4.2-.5.1-.1.3-.2.5-.1l2.4.5 1.6-4.9-5.8-2.1C16 3 14.6 4.8 12.1 4.8 9.6 4.8 8.2 3 7.7 1.7L1.8 3.9l1.6 4.9 2.4-.5c.2 0 .4 0 .5.1.1.1.2.3.2.5v11.5z"
    />
  </Svg>
);
