import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Camera({style, fill}) {
  return (
    <Svg viewBox="0 0 16 14" style={style}>
      <Path
        fill={fill}
        d="M10 .3c.2 0 .4.1.6.3l1.1 1.7H14c1.1 0 2 .9 2 2v7.3c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V4.3c0-1.1.9-2 2-2h2.3L5.4.6c.2-.2.4-.3.6-.3h4zm-.4 1.4H6.4L5.2 3.4c-.1.2-.3.3-.5.3H2c-.4 0-.7.3-.7.6v7.3c0 .4.3.7.7.7h12c.4 0 .7-.3.7-.7V4.3c0-.4-.3-.7-.7-.7h-2.7c-.2 0-.4-.1-.6-.3L9.6 1.7zM8 4.3c1.8 0 3.3 1.5 3.3 3.3S9.8 11 8 11 4.7 9.5 4.7 7.7 6.2 4.3 8 4.3zm0 1.4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      />
    </Svg>
  );
}

export default Camera;
