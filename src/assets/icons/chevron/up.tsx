import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function ChevronUp({style, fill}) {
  return (
    <Svg style={style} viewBox='0 0 24 24'>
      <Path
        fill={fill}
        d='M12 10.4l5.3 5.3c.4.4 1 .4 1.4 0 .4-.4.4-1 0-1.4l-6-6c-.4-.4-1-.4-1.4 0l-6 6c-.4.4-.4 1 0 1.4.4.4 1 .4 1.4 0l5.3-5.3z'
      />
    </Svg>
  );
}
