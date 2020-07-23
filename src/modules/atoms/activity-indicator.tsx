import React from 'react';
import styled from 'styled-components/native';
import {ActivityIndicatorProps} from 'react-native';

import {BLACK} from '@src/constants';

export type _ActivityIndicatorProps = ActivityIndicatorProps;

export default function ActivityIndicator({
  size = 'large',
  color = BLACK,
  style,
}: _ActivityIndicatorProps) {
  return <_ActivityIndicator {...{size, color, style}} />;
}

const _ActivityIndicator = styled.ActivityIndicator({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: 'center',
  justifyContent: 'center',
});
