import React from 'react';
import styled from 'styled-components/native';

import Colors from '@src/constants/colors';

type IProps = {
  level?: number;
  color?: 'PRIMARY' | string;
  fontWeight?: number | string;
  style?: any;
  children?: any;
  width?: number;
  onPress?: any;
  textAlign?: 'left' | 'center' | 'right';
  ellipsis?: boolean;
  preWrap?: boolean;
};

const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const SKETCH_LINE = [15, 18, 22, 24, 29];

const defaultProps = {
  level: 0,
  fontWeight: 'regular',
  color: Colors.primary,
};

export default function Text(props: IProps) {
  const {
    width,
    style,
    children,
    onPress,
    textAlign,
    ellipsis,
    level,
    color,
    fontWeight,
  } = props;

  const _Text = styled.Text({
    padding: 0,
    margin: 0,
    fontSize: 10 + level * 2,
    color: color,
    fontWeight:
      typeof fontWeight === 'number' ? fontWeight : FONT_WEIGHT[fontWeight],
    width: width,
    textAlign: textAlign || 'left',
    lineHeight: SKETCH_LINE[level] / (10 + level * 2),
    letterSpacing: -0.56,
  });

  return (
    <_Text
      style={style}
      onPress={onPress}
      ellipsizeMode={ellipsis ? 'tail' : null}>
      {children}
    </_Text>
  );
}

Text.defaultProps = defaultProps;
