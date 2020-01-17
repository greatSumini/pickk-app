import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, ViewStyle} from 'react-native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';

type IProps = {
  direction?: 'COL' | 'ROW';
  length?: number;
  level?: number;
  style?: StyleProp<ViewStyle>;
};

const defaultProps = {
  level: 0,
  direction: 'COL',
};

export default function Line(props: IProps) {
  const length = props.length ? rem(props.length) : '100%';
  const thickness = rem(1 + 3 * props.level);

  const _Line = styled.View`
    background-color: ${colors.lightGrey};
    width: ${props.direction === 'COL' ? length : thickness};
    height: ${props.direction === 'COL' ? thickness : length};
  `;
  return <_Line style={props.style} />;
}

Line.defaultProps = defaultProps;
