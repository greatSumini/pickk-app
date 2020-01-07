import React from 'react';
import Svg, {Path} from 'react-native-svg';

export default ({style, fill}) => (
  <Svg style={style} viewBox="0 0 15.5 15.5">
    <Path
      fill={fill}
      d="M13.793,15.207l-2.6-2.6a7,7,0,1,1,1.414-1.414l2.6,2.6a1,1,0,0,1-1.414,1.414ZM2,7a5,5,0,0,0,8.458,3.611,1.006,1.006,0,0,1,.152-.152A5,5,0,1,0,2,7Z"
    />
  </Svg>
);
