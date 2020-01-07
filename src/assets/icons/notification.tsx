import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M18 14V9c0-3.3-2.7-6-6-6S6 5.7 6 9v5c0 .7-.2 1.4-.5 2h13.1c-.4-.6-.6-1.3-.6-2zm4 4H2c-1.3 0-1.3-2 0-2 1.1 0 2-.9 2-2V9c0-4.4 3.6-8 8-8s8 3.6 8 8v5c0 1.1.9 2 2 2 1.3 0 1.3 2 0 2zm-7.4 3.5c-.5.9-1.5 1.5-2.6 1.5s-2.1-.6-2.6-1.5c-.4-.7.1-1.5.9-1.5h3.5c.7 0 1.2.8.8 1.5z"
    />
  </Svg>
);
