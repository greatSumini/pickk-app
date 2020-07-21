import React from 'react';
import styled from 'styled-components/native';

import Section, {SectionSize} from '@src/modules/molecules/section';
import {Space} from '@src/modules/atoms';
import {rem, REGULAR_GREY} from '@src/constants';

export type OrderClaimReasonProps = {
  reason: string;
  setReason: React.Dispatch<React.SetStateAction<string>>;
  title: string;
};

export default function OrderClaimReason(props: OrderClaimReasonProps) {
  const {reason, setReason, title} = props;

  return (
    <Section title={`${title} 사유 입력`} size={SectionSize.Small}>
      <StyledTextInput
        multiline={true}
        numberOfLines={8}
        value={reason}
        onChangeText={setReason}
        placeholder={`${title} 사유를 입력해주세요.`}
      />
      <Space level={2} />
    </Section>
  );
}

const StyledTextInput = styled.TextInput({
  width: rem(328),
  height: rem(234),
  paddingVertical: rem(20),
  paddingHorizontal: rem(12),
  marginHorizontal: rem(16),
  borderRadius: rem(8),
  fontSize: rem(12),
  borderStyle: 'solid',
  borderWidth: rem(1),
  borderColor: REGULAR_GREY,
  textAlignVertical: 'top',
});
