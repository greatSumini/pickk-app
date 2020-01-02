import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 31 31">
    <Path
      d="M15.5 23.25l-9.11 4.79 1.74-10.15-7.37-7.18 10.18-1.48L15.5 0l4.56 9.23 10.18 1.48-7.37 7.18 1.74 10.15z"
      fill={fill}
      fillRule="evenodd"
    />
  </Svg>
);
