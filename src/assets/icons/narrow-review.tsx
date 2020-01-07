import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 18 16">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M0 0h18v4H0zM0 6h18v4H0zM0 12h18v4H0z"
    />
  </Svg>
);
