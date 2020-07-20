import React from 'react';
import styled from 'styled-components/native';

import ProgressNode from './node';
import {LIGHT_GREY, rem} from '@src/constants';
import {Row} from '@src/modules/atoms';

export type OrderClaimProgressBarProps = {
  phase: number;
};

const NODE_DATA = ['옵션 선택', '반송 정보 입력', '사유 입력'];

function OrderClaimProgressBar(props: OrderClaimProgressBarProps) {
  const {phase} = props;

  return (
    <Wrapper>
      {NODE_DATA.map((text, index) => (
        <ProgressNode key={text} {...{text, index, phase}} />
      ))}
    </Wrapper>
  );
}

export default React.memo(OrderClaimProgressBar);

const Wrapper = styled(Row)({
  justifyContent: 'space-between',
  paddingVertical: rem(12),
  paddingHorizontal: rem(16),
  borderTopWidth: rem(1),
  borderTopColor: LIGHT_GREY,
  borderBottomWidth: rem(1),
  borderBottomColor: LIGHT_GREY,
});
