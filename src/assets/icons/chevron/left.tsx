import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 24 24">
    <Path
      fill={fill}
      d="M10.4 12l5.3-5.3c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4l6 6c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4L10.4 12z"
    />
  </Svg>
);
