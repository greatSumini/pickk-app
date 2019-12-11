import React from 'react';
import styled from 'styled-components/native';

import {BLACK} from './colors';

type IProps = {
  level?: number;
  color?: 'PRIMARY' | string;
  fontWeight?: number | string;
  style?: any;
  children?: any;
  width?: string;
  onPress?: any;
  textAlign?: string;
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
  color: BLACK,
};

export default function Text(props: IProps) {
  const {
    width,
    style,
    children,
    onPress,
    textAlign,
    ellipsis,
    preWrap,
    level,
    color,
    fontWeight,
  } = props;

  const _Text = styled.Text`
    padding: 0;
    margin: 0;
    font-size: ${0.1 + level * 0.02}rem;
    color: ${color};
    font-weight: ${typeof fontWeight === 'number'
      ? fontWeight
      : FONT_WEIGHT[fontWeight]};
    width: ${width || 'fit-content'};
    height: fit-content;
    text-align: ${textAlign || 'left'};

    line-height: ${SKETCH_LINE[level] / (10 + level * 2)};
    letter-spacing: -0.56px;
    word-break: break-all;
    ${ellipsis &&
      `white-space: nowrap;
      text-overflow: ellipsis;
      display: block;
      overflow: hidden
    `}
    ${preWrap &&
      `
    white-space: pre-wrap; word-break: keep-all;
    `}
  `;
  return (
    <_Text style={style} onPress={onPress}>
      {children}
    </_Text>
  );
}

Text.defaultProps = defaultProps;
