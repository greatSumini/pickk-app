import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox='0 0 24 24'>
    <Path
      fill={fill}
      d='M5 23c-1.7 0-3-1.3-3-3V9c0-.3.1-.6.4-.8l9-7c.4-.3.9-.3 1.2 0l9 7c.3.2.4.5.4.8v11c0 1.7-1.3 3-3 3H5zm7-19.7L4 9.5V20c0 .6.4 1 1 1h3v-9c0-.5.4-.9.9-1H15c.6 0 1 .4 1 1v9h3c.6 0 1-.4 1-1V9.5l-8-6.2zm2 9.7h-4v8h4v-8z'
    />
  </Svg>
);
