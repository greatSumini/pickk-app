import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

import {IconProps} from './icons';
import {BLACK, rem} from '@src/constants';

export default function InquiryIcon({style, fill = BLACK}: IconProps) {
  return (
    <Svg
      viewBox='0 0 35 33'
      style={{width: rem(35), height: rem(33), ...(style as object)}}>
      <G fill={fill} transform='translate(-54 -390)'>
        <G transform='translate(54 389)'>
          <G transform='translate(0 .3022)'>
            <Path
              fillRule='evenodd'
              d='M33.3 27c0 .9-.7 1.6-1.6 1.6h-1.9c-.4 0-.8.3-.8.8v1.5l-3.5-2.1c-.1-.1-.3-.1-.4-.1H20c-.9 0-1.6-.7-1.6-1.6v-6.3c0-.1-.1-.3-.1-.4h7.3c1.8 0 3.2-1.2 3.6-2.9h2.6c.9 0 1.6.7 1.6 1.6V27zm-20.6-8.2c-.2 0-.3.1-.5.2l-4.3 3.2v-2.6c0-.4-.3-.8-.8-.8H3.7c-1.2 0-2.2-1-2.2-2.2V4.4c0-1.2 1-2.2 2.2-2.2h21.8c1.2 0 2.2 1 2.2 2.2v12.2c0 1.2-1 2.1-2.2 2.1H12.7zm19-2.9h-2.5V4.4c0-2-1.7-3.7-3.7-3.7H3.7C1.7.7 0 2.4 0 4.4v12.2c0 2 1.7 3.7 3.7 3.7h2.6v3.4c0 .3.2.6.4.7.1.1.2.1.3.1.2 0 .3-.1.5-.2l5.4-4h4c-.1.1-.1.2-.1.4V27c0 1.7 1.4 3.2 3.2 3.2h4.9l4.5 2.7c.1.1.3.1.4.1.1 0 .3 0 .4-.1.2-.1.4-.4.4-.7v-2.1h1.1c1.7 0 3.2-1.4 3.2-3.2V19c0-1.7-1.4-3.1-3.2-3.1z'
              clipRule='evenodd'
            />
          </G>
          <Path d='M22.1 22.9c-.5 0-1 .4-1 1s.4 1 1 1c.5 0 1-.4 1-1s-.5-1-1-1' />
          <Path d='M25.9 22.9c-.5 0-1 .4-1 1s.4 1 1 1c.5 0 1-.4 1-1s-.5-1-1-1' />
          <Path d='M29.7 22.9c-.5 0-1 .4-1 1s.4 1 1 1c.5 0 1-.4 1-1s-.5-1-1-1' />
          <Path d='M14.5 5.7c-1.1 0-2.1.6-2.6 1.6-.2.4 0 .8.3 1 .4.2.8 0 1-.3.2-.5.7-.8 1.3-.8.8 0 1.4.6 1.4 1.4 0 .8-.6 1.4-1.4 1.4-.4 0-.8.3-.8.8v1.5c0 .4.3.8.8.8.4 0 .8-.3.8-.8v-.8c1.3-.3 2.2-1.5 2.2-2.8-.1-1.7-1.4-3-3-3' />
          <Path d='M14.5 14.2c-.5 0-.9.4-.9.9s.4.9.9.9.9-.4.9-.9c0-.4-.4-.9-.9-.9' />
        </G>
      </G>
    </Svg>
  );
}
