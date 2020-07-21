import React from 'react';
import styled from 'styled-components/native';

import Section, {SectionSize} from '@src/modules/molecules/section';
import CheckButton from '@src/modules/molecules/button/check';
import {Text, Row, Space} from '@src/modules/atoms';
import {rem, BLACK, MIDDLE_GREY} from '@src/constants';

export type OrderClaimSentCheckerProps = {
  sent: boolean;
  setSent: React.Dispatch<React.SetStateAction<boolean>>;
};

function OrderClaimSentChecker({sent, setSent}: OrderClaimSentCheckerProps) {
  return (
    <Section
      size={SectionSize.Small}
      title='직접 택배사에 반품 예약 접수를 해주셨나요?'>
      <StyledRow>
        <CheckButton
          width={rem(20)}
          height={rem(20)}
          onPress={() => setSent(!sent)}
          selected={sent}
        />
        <Space direction='ROW' />
        <Text level={1} fontWeight='medium' color={sent ? BLACK : MIDDLE_GREY}>
          네, 접수했습니다.
        </Text>
      </StyledRow>
    </Section>
  );
}

export default React.memo(
  OrderClaimSentChecker,
  (prev, next) => prev.sent === next.sent,
);

const StyledRow = styled(Row)({
  paddingHorizontal: rem(16),
});
