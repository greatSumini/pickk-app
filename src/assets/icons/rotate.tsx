import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg viewBox="0 0 24 24" style={style}>
    <Path
      d="M16 11c-.6 0-1-.4-1-1s.4-1 1-1h3.5l-2.8-2.7c-2.5-2.5-6.2-3-9.3-1.5l-.3.2C4 6.7 2.4 10.3 3.2 13.8s3.8 6 7.3 6.2 6.8-2 8-5.3c.2-.5.8-.8 1.3-.6.5.2.8.8.6 1.3-1.5 4.2-5.6 6.9-10 6.7-4.4-.3-8.2-3.4-9.2-7.8s1-8.8 4.9-11S14.9 1.8 18 5l3 2.7V4c0-.5.4-.9.9-1h.1c.6 0 1 .4 1 1V10.7l-.1.1.1-.1c-.1.1-.2.2-.3.2h-.1-.1H22.2h0H16z"
      fill={fill}
    />
  </Svg>
);
