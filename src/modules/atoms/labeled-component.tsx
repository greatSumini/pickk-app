import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

import Row from './row';
import Text from './text';
import {rem, MIDDLE_GREY} from '@src/constants';

export type LabeledComponentProps = {
  label: string;
  text?: string;
  children?: ReactNode;
};

export default function LabeledComponent({
  label,
  text,
  children,
}: LabeledComponentProps) {
  return (
    <Wrapper>
      <Label level={1} fontWeight='medium' color={MIDDLE_GREY}>
        {label}
      </Label>
      {text && <Text level={1}>{text}</Text>}
      {children}
    </Wrapper>
  );
}

const Wrapper = styled(Row)({
  width: '100%',
  paddingVertical: rem(4),
  paddingHorizontal: rem(16),
  justifyContent: 'space-between',
  alignItems: 'flex-start',
});

const Label = styled(Text)({
  width: 'auto',
  flex: 1,
});
