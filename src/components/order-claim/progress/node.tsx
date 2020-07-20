import React from 'react';
import styled from 'styled-components/native';

import {BLACK, MIDDLE_GREY, rem, WHITE} from '@src/constants';
import {Text, Row} from '@src/modules/atoms';

export type OrderClaimProgressBarProps = {
  phase: number;
  text: string;
  index: number;
};

function OrderClaimProgressNode({
  phase,
  text,
  index,
}: OrderClaimProgressBarProps) {
  const color = phase >= index ? BLACK : MIDDLE_GREY;

  return (
    <>
      <Index backgroundColor={color}>
        <Text level={-1} color={WHITE} fontWeight='medium'>
          {index + 1}
        </Text>
      </Index>
      <Text level={1} color={color} fontWeight='medium'>
        {text}
      </Text>
      {index !== 2 && <Bar backgroundColor={color} />}
    </>
  );
}

export default React.memo(
  OrderClaimProgressNode,
  (prev, next) => prev.phase === prev.index && next.phase === next.index,
);

const Index = styled(Row)<{backgroundColor}>(({backgroundColor}) => {
  return {
    justifyContent: 'center',
    width: rem(16),
    height: rem(16),
    backgroundColor,
    borderRadius: rem(16),
  };
});

const Bar = styled.View<{backgroundColor}>(({backgroundColor}) => {
  return {
    width: rem(29),
    height: rem(1),
    marginHorizontal: rem(6),
    backgroundColor,
  };
});
