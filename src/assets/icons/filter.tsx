import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 14 11">
    <Path
      d="M12 3H4.9c-.2 1.2-1.2 2-2.4 2C1.1 5 0 3.9 0 2.5S1.1 0 2.5 0C3.7 0 4.7.8 5 2h7v1zM2.5 1C1.7 1 1 1.7 1 2.5S1.7 4 2.5 4c.7 0 1.3-.5 1.5-1.2v-.6C3.8 1.5 3.2 1 2.5 1zM2 8h7c.2-1.2 1.3-2 2.4-2C12.8 6 14 7.1 14 8.5S12.8 11 11.5 11c-1.2 0-2.2-.8-2.5-2H2V8zm9.5 2c.8 0 1.5-.7 1.5-1.5S12.3 7 11.5 7c-.7 0-1.3.5-1.5 1.2l-.1.3.1.3c.1.7.8 1.2 1.5 1.2z"
      fill={fill}
    />
  </Svg>
);
