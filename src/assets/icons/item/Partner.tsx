import React from 'react';
import Svg, {Path, Circle} from 'react-native-svg';
import {IconProps} from '@src/assets/icons/icons';
import {colors, rem} from '@src/constants';

export default function ItemPartnerIcon({
  style = {width: rem(12), height: rem(12)},
  fillOut = colors.primary,
  fillIn = colors.white,
}: Partial<IconProps>) {
  return (
    <Svg
      viewBox='0 0 12.1 12.1'
      style={{width: rem(12), height: rem(12), ...(style as object)}}>
      <Circle
        cx='6'
        cy='6'
        r='6'
        fill={fillOut}
        fillRule='evenodd'
        clipRule='evenodd'
      />
      <Path
        fill={fillIn}
        fillRule='evenodd'
        d='M9.2 7.9c0-.1 0-.1 0 0V3.8c0-.4-.4-.8-.8-.8-.5 0-.8.4-.8.8v1.4L4.8 2.4c-.3-.3-.8-.3-1 0-.3.2-.4.5-.3.8l-.4-.4c-.3-.3-.8-.3-1 0-.3.3-.3.8 0 1L4.2 6c-.2 0-.4 0-.6.2-.1.2-.2.4-.2.6-.2 0-.4 0-.6.2-.3.3-.3.8 0 1.1l1.6 1.6c.5.5 1.2.9 2 .9 1.5-.1 2.7-1.2 2.8-2.7z'
        clipRule='evenodd'
      />
    </Svg>
  );
}
