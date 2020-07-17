import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {BLACK, rem} from '@src/constants';
import {IconProps} from './icons';

export default function CheckIcon({style = {}, fill = BLACK}: IconProps) {
  return (
    <Svg
      viewBox='0 0 10 8'
      style={{width: rem(10), height: rem(8), ...(style as object)}}>
      <Path
        fill={fill}
        d='M3.565058 8c-.184486 0-.357521-.079082-.479663-.218112L.156522 4.41964c-.23029-.265306-.20357-.668368.061071-.899235.26337-.232143.665422-.205358.898256.059949l2.446664 2.808675L8.883342.220657c.229016-.267857.63234-.294643.896983-.065051.265914.229592.293905.632654.064888.899235l-5.79922 6.724496C3.925124 7.919643 3.750817 8 3.56633 8h-.001272z'
      />
    </Svg>
  );
}
