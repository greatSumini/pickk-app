import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fillIn = 'white', fillOut}) => (
  <Svg viewBox="0 0 22 22" style={style}>
    <Path
      fill={fillOut}
      d="M21.6 21.6h-4.5c-1.8 0-3.3-1.4-3.6-3.2 0-1.3-1-2.3-2.3-2.4-1.3.1-2.3 1.1-2.3 2.4-.2 1.8-1.7 3.2-3.6 3.2H.4v-12L11.1.2l10.5 9.3v12.1zm-20-1.2h3.7c1.3 0 2.4-1.1 2.4-2.4.2-1.7 1.6-3 3.4-3.1h.2c1.7.1 3.2 1.4 3.4 3.1 0 1.3 1.1 2.4 2.4 2.4h3.3V10l-9.3-8.2-9.5 8.4v10.2z"
    />
    <Path
      fill={fillIn}
      d="M1.6 20.4h3.7c1.3 0 2.4-1.1 2.4-2.4.2-1.7 1.6-3 3.4-3.1h.2c1.7.1 3.2 1.4 3.4 3.1 0 1.3 1.1 2.4 2.4 2.4h3.3V10l-9.3-8.2-9.5 8.4v10.2z"
    />
  </Svg>
);
