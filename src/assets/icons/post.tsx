import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 24 24">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 5c0-1.7 1.3-3 3-3h14c1.7 0 3 1.3 3 3v14c0 1.7-1.3 3-3 3H5c-1.7 0-3-1.3-3-3V5zm18 3V5c0-.6-.4-1-1-1H5c-.6 0-1 .4-1 1v3h16zm0 11v-9H4v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1z"
      clipRule="evenodd"
    />
  </Svg>
);
