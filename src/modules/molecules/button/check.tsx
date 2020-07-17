import React from 'react';
import styled from 'styled-components/native';
import {Button} from 'react-native';

import CheckIcon from '@src/assets/icons/check';
import {WHITE, rem, REGULAR_GREY, LIGHT_GREY, BLACK} from '@src/constants';

export type CheckButtonProps = {
  onPress: () => void;
  selected: boolean;
  width?: string | number;
  height?: string | number;
};

export default function CheckButton({
  onPress,
  selected,
  width,
  height,
}: CheckButtonProps) {
  const handleChange = () => {
    onPress();
  };

  const w = width ? width : rem(20);
  const h = height ? height : rem(20);

  return (
    <Wrapper
      title=''
      onPress={handleChange}
      selected={selected}
      width={w}
      height={h}>
      <CheckIcon style={{width: rem(10), height: rem(8)}} fill={WHITE} />
    </Wrapper>
  );
}

const Wrapper = styled(Button)<{
  selected: boolean;
  width: string | number;
  height: string | number;
}>((props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: props.width,
  height: props.height,
  borderRadius: rem(9999),
  border: props.selected ? 'none' : '',
  borderStyle: 'solid',
  borderWidth: rem(1),
  borderColor: REGULAR_GREY,
  backgroundColor: props.selected ? BLACK : LIGHT_GREY,
}));
