import React from 'react';
import {Button as _Button, ButtonProps as _ButtonProps} from 'react-native';

export type ButtonProps = _ButtonProps;

export default function Button(props: ButtonProps) {
  return <_Button {...props} />;
}
