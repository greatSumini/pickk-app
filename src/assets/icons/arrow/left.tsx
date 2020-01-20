import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function ArrowLeftIcon({style, fill}) {
  return (
    <Svg style={style} viewBox="0 0 24 24">
      <Path
        fill={fill}
        d="M9.3 5.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L6.4 11H20c.5 0 .9.4 1 .9v.1c0 .6-.4 1-1 1H6.4l4.3 4.3c.4.4.4.9.1 1.3l-.1.1c-.4.4-1 .4-1.4 0l-6-6-.1-.1-.1-.1v-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1-.1s0-.1.1-.1l.1-.1-.1.1.1-.1 6-5.7z"
      />
    </Svg>
  );
}
