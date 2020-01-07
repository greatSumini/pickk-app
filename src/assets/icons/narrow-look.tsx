import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 18 17">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M0 0h8v7H0zM0 10h8v7H0zM10 0h8v7h-8zM10 10h8v7h-8z"
    />
  </Svg>
);
