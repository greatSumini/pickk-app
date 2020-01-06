import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 20 16">
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 3h16v10H2zM0 0h20v1H0zM0 15h20v1H0z"
    />
  </Svg>
);
