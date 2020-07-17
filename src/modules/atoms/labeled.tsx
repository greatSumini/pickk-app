import React, {ReactNode} from 'react';
import styled from 'styled-components/native';

import Row from './row';
import Text from './text';
import {rem, MIDDLE_GREY, SALE_RED, BLACK} from '@src/constants';

import {addCommaToNumber} from '@src/lib/utils';

export type LabeledProps = {
  label: string;
  text?: string | number;
  children?: ReactNode;
  important?: boolean;
  isPrice?: boolean;
  isMinus?: boolean;
  hasMargin?: boolean;
};

function Labeled({
  label,
  text,
  children,
  important = false,
  isPrice = false,
  isMinus = false,
  hasMargin = false,
}: LabeledProps) {
  const [labelLevel, labelWeight, labelColor, textColor] = important
    ? [3, 'bold', BLACK, SALE_RED]
    : [1, 'medium', MIDDLE_GREY, BLACK];

  return (
    <Wrapper hasMargin={hasMargin}>
      <Label level={labelLevel} fontWeight={labelWeight} color={labelColor}>
        {label}
      </Label>
      {text !== null && (
        <Text
          level={labelLevel}
          fontWeight={labelWeight}
          lines={2}
          style={{
            maxWidth: rem(240),
          }}
          textAlign='right'
          color={textColor}>
          {isPrice
            ? `${isMinus ? '-' : ''}${addCommaToNumber(Number(text))}원`
            : text}
        </Text>
      )}
      {children}
    </Wrapper>
  );
}

export default React.memo(Labeled);

const Wrapper = styled(Row)<{hasMargin}>(({hasMargin}) => {
  return {
    width: '100%',
    marginVertical: hasMargin ? rem(8) : 0,
    paddingVertical: rem(4),
    paddingHorizontal: rem(16),
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  };
});

const Label = styled(Text)({
  width: 'auto',
  flex: 1,
});
