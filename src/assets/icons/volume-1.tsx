import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default function Volume1({style, fill}) {
  return (
    <Svg viewBox="0 0 9 8" style={style}>
      <Path
        d="M6 .5v7c0 .4-.5.7-.8.4L2.8 6H1c-.3 0-.5-.2-.5-.5v-3c0-.3.2-.5.5-.5h1.8L5.2.1c.3-.3.8 0 .8.4zm-1 1L3.3 2.9c-.1.1-.2.1-.3.1H1.5v2H3c.1 0 .2 0 .3.1L5 6.5v-5zm2.4.4c.2-.2.5-.2.7 0 1.2 1.2 1.2 3.1 0 4.2-.2.2-.5.2-.7 0s-.2-.5 0-.7c.8-.8.8-2 0-2.8-.2-.2-.2-.5 0-.7z"
        fill={fill}
      />
    </Svg>
  );
}
