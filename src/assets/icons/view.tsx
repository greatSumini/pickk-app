import React from 'react';
import Svg, {Path, G} from 'react-native-svg';

export default function ViewIcon({style, fill, fillIn}) {
  return (
    <Svg style={style} viewBox='0 0 10 10'>
      <G transform='translate(0 1.25)'>
        <Path
          fill={fill}
          d='M5,0c1.4,0,2.6,0.7,3.7,1.8C9.2,2.3,9.6,2.9,10,3.6C10,3.7,10,3.8,10,3.9C9.6,4.6,9.2,5.2,8.7,5.7C7.6,6.8,6.4,7.5,5,7.5
			c-1.4,0-2.6-0.7-3.7-1.8C0.8,5.2,0.4,4.6,0,3.9C0,3.8,0,3.7,0,3.6c0.3-0.6,0.8-1.2,1.3-1.8C2.4,0.7,3.6,0,5,0z'
        />
        <Path
          fill={fillIn}
          d='M5,2.1c-0.9,0-1.7,0.7-1.7,1.7c0,0.9,0.7,1.7,1.7,1.7c0,0,0,0,0,0c0.9,0,1.7-0.7,1.7-1.7S5.9,2.1,5,2.1z'
        />
      </G>
    </Svg>
  );
}
