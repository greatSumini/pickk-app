import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => {
  return (
    <Svg style={style} viewBox="0 0 24 24">
      <Path
        fill={fill}
        d="M9.3 3c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-5.3c0-.6.4-1 1-1s1 .4 1 1V20c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V6c0-1.7 1.3-3 3-3h5.3zm9.4-1.7l4 4c.4.4.4 1 0 1.4l-10 10c-.2.2-.4.3-.7.3H8c-.6 0-1-.4-1-1v-4c0-.3.1-.5.3-.7l10-10c.4-.4 1-.4 1.4 0zM18 3.4l-9 9V15h2.6l9-9L18 3.4z"
      />
    </Svg>
  );
};
