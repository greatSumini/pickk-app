import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M13.6 12l-5.3 5.3c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l6-6c.4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4l5.3 5.3z"
    />
  </Svg>
);
