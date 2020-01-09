import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';

type IProps = {
  direction?: 'COL' | 'ROW';
  level?: number;
};

const defaultProps = {
  level: 0,
  direction: 'COL',
};

export default function Line(props: IProps) {
  const _Line = styled.View`
    background-color: ${colors.lightGrey};
    ${props.direction === 'COL' &&
      `
            width:100%;
            height:${rem(1 + 3 * props.level)};
        `}
    ${props.direction === 'ROW' &&
      `
            height:100%;
            width:${rem(1 + 3 * props.level)};
        `}
  `;
  return <_Line />;
}

Line.defaultProps = defaultProps;
