import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, TextStyle} from 'react-native';

import Colors from '@src/constants/colors';

type IProps = {
  level?: number;
  color?: string;
  fontWeight?: number | string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode | React.ReactNodeArray;
  width?: number;
  onPress?: (e) => void;
  textAlign?: 'left' | 'center' | 'right';
  ellipsis?: boolean;
  preWrap?: boolean;
  lines?: number;
};

const FONT_WEIGHT = {
  regular: 400,
  medium: 500,
  bold: 700,
};

const defaultProps = {
  level: 0,
  fontWeight: 'regular',
  color: Colors.primary,
  textAlign: 'left',
  lines: 1,
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
    lines,
  } = props;

  const _Text = styled.Text({
    padding: 0,
    margin: 0,
    fontSize: 10 + level * 2,
    color,
    fontWeight:
      typeof fontWeight === 'number' ? fontWeight : FONT_WEIGHT[fontWeight],
    width,
    textAlign,
    letterSpacing: -0.56,
  });

  return (
    <_Text
      style={style}
      onPress={onPress}
      numberOfLines={lines}
      ellipsizeMode={ellipsis ? 'tail' : null}>
      {children}
    </_Text>
  );
}

Text.defaultProps = defaultProps;
