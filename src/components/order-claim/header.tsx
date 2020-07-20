import * as React from 'react';
import styled from 'styled-components/native';

import {useNavigation} from '@react-navigation/native';
import {Text, Touchable, Row} from '@src/modules/atoms';
import {rem, BLACK, WHITE} from '@src/constants';
import ArrowLeftIcon from '@src/assets/icons/arrow/left';
import XIcon from '@src/assets/icons/x';

export type OrderClaimHeaderProps = {
  phase: number;
  setPhase: React.Dispatch<React.SetStateAction<number>>;
  title: string;
};

export default function OrderClaimHeader({
  phase,
  setPhase,
  title,
}: OrderClaimHeaderProps) {
  const navigation = useNavigation();
  const isFirstPhase = phase === 0;
  const handleBack = () => {
    isFirstPhase ? navigation.goBack() : setPhase(phase - 1);
  };

  const handleExit = () => {
    isFirstPhase ? null : navigation.goBack();
  };

  return (
    <Wrapper>
      <StyledTouchable onPress={handleBack}>
        <ArrowLeftIcon style={{width: rem(20), height: rem(20)}} fill={BLACK} />
      </StyledTouchable>
      <Text level={3} color={BLACK} fontWeight='medium'>
        {title}
      </Text>
      <StyledTouchable onPress={handleExit}>
        <XIcon
          style={{width: rem(12), height: rem(12)}}
          fill={isFirstPhase ? WHITE : BLACK}
        />
      </StyledTouchable>
    </Wrapper>
  );
}

const Wrapper = styled(Row)({
  height: rem(56),
  padding: rem(16),
  justifyContent: 'space-between',
});

const StyledTouchable = styled(Touchable)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
