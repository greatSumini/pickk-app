import React from 'react';
import styled from 'styled-components/native';

import rem from '@src/constants/rem';

type IProps = {
  direction?: 'COL' | 'ROW';
  level?: number;
  size?: number;
};

const defaultProps = {
  level: 0,
  direction: 'COL',
};

export default function Space(props: IProps) {
  const _Space = styled.View`
    background-color: transparent;
    ${props.direction === 'COL' &&
      `
            width:0.1;
            height:${`${
              props.size ? rem(props.size) : rem(4 + 8 * props.level)
            }`};
        `}
    ${props.direction === 'ROW' &&
      `
            height:0.1;
            width:${props.size ? rem(props.size) : rem(4 + 8 * props.level)};
        `}
  `;
  return <_Space />;
}

Space.defaultProps = defaultProps;
