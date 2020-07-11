import React from 'react';
import styled from 'styled-components/native';
import {StyleProp, TextStyle} from 'react-native';

import Colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {capitalize} from '@src/lib/utils/string';

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
  fontSize?: number;
};

const FONT_WEIGHT = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
};

export default function Text(props: IProps) {
  const {
    width,
    style,
    children,
    onPress,
    textAlign = 'left',
    ellipsis,
    level = 0,
    color = Colors.primary,
    fontWeight = 'regular',
    lines = 1,
    fontSize,
  } = props;

  const fontWeightPostfix = capitalize(
    typeof fontWeight === 'string'
      ? fontWeight
      : Object.keys(FONT_WEIGHT).find((key) => FONT_WEIGHT[key] === fontWeight),
  );

  const _Text = styled.Text({
    padding: 0,
    margin: 0,
    fontSize: fontSize ? rem(fontSize) : rem(10 + level * 2),
    color,
    width,
    textAlign,
    letterSpacing: -0.56,
    alignItems: 'center',
    fontFamily: `Montserrat-${fontWeightPostfix}`,
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
