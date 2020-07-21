import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

import {
  Button as _Button,
  ButtonProps as _ButtonProps,
  StyleProp,
  ViewStyle,
  View,
  TouchableOpacity,
} from 'react-native';

import {Text, Touchable} from '@src/modules/atoms';
import {
  rem,
  BLACK,
  WHITE,
  LIGHT_GREY,
  MIDDLE_GREY,
  REGULAR_GREY,
} from '@src/constants';

export enum ButtonType {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Etc = 'ETC',
}

export type ButtonProps = {
  title?: string;
  onPress: () => void;
  type?: ButtonType;
  filled?: boolean;
  important?: boolean;
  disabled?: boolean;
  block?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: ReactNode;
};

export default function Button(props: ButtonProps) {
  const {
    title = '',
    onPress,
    type = ButtonType.Primary,
    filled = true,
    important = true,
    disabled = false,
    block = true,
    style,
    children,
  } = props;

  const BUTTON_STYLES = {
    PRIMARY_FILLED: important
      ? [rem(44), 2, WHITE, 'regular', BLACK, BLACK, rem(4)]
      : [rem(44), 2, BLACK, 'regular', LIGHT_GREY, LIGHT_GREY, rem(4)],
    PRIMARY_UNFILLED: [
      rem(44),
      2,
      BLACK,
      'regular',
      WHITE,
      REGULAR_GREY,
      rem(4),
    ],
    SECONDARY_FILLED: [
      rem(44),
      2,
      BLACK,
      'regular',
      LIGHT_GREY,
      LIGHT_GREY,
      rem(22),
    ],
    SECONDARY_UNFILLED: [
      rem(44),
      2,
      BLACK,
      'regular',
      WHITE,
      REGULAR_GREY,
      rem(22),
    ],
    ETC_FILLED: important
      ? [rem(28), 1, WHITE, 'regular', BLACK, BLACK, rem(4)]
      : [rem(28), 1, BLACK, 'regular', LIGHT_GREY, LIGHT_GREY, rem(4)],
    ETC_UNFILLED: important
      ? [rem(28), 1, BLACK, 'regular', WHITE, WHITE, rem(4)]
      : [rem(28), 1, MIDDLE_GREY, 'regular', WHITE, WHITE, rem(4)],
  };

  const [
    height,
    fontLevel,
    fontColor,
    fontWeight,
    backgroundColor,
    borderColor,
    borderRadius,
  ] = filled
    ? BUTTON_STYLES[`${type}_FILLED`]
    : BUTTON_STYLES[`${type}_UNFILLED`];

  return (
    <StyledTouchable
      style={style}
      {...{
        onPress,
        disabled,
        block,
        height,
        backgroundColor,
        borderColor,
        borderRadius,
      }}>
      {title && (
        <Text level={fontLevel} color={fontColor} fontWeight={fontWeight}>
          {title}
        </Text>
      )}
      {children}
    </StyledTouchable>
  );
}

const StyledTouchable = styled(TouchableOpacity)<{
  block;
  height;
  backgroundColor;
  borderColor;
  borderRadius;
}>(({block, height, backgroundColor, borderColor, borderRadius}) => {
  return {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height,
    width: block ? '100%' : '',
    backgroundColor,
    paddingHorizontal: block ? rem(12) : rem(0),
    borderStyle: 'solid',
    borderColor,
    borderWidth: rem(1),
    borderRadius,
  };
});
