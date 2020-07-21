import React from 'react';
import styled from 'styled-components/native';

import {Alert} from 'react-native';
import {addCommaToNumber} from '@src/lib/utils';
import {SALE_RED, BLACK, rem} from '@src/constants';
import {Text, Button, Row} from '@src/modules/atoms';

export type OrderClaimFooterProps = {
  phase: number;
  setPhase: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  onComplete;
  isValid: boolean[];
  priceData?: Array<{
    label: string;
    value: number;
  }>;
  alert?: Array<() => void>;
};

export default function OrderClaimFooter(props: OrderClaimFooterProps) {
  const {phase, setPhase, name, onComplete, isValid, priceData} = props;

  const DATA = [
    {text: `${name} 신청하기`, onPress: () => setPhase(phase + 1)},
    {text: `다음 단계로`, onPress: () => setPhase(phase + 1)},
    {
      text: `${name} 신청 완료`,
      onPress: onComplete,
    },
  ];

  const {text, onPress} = (isValid.length === 3
    ? DATA
    : DATA.filter((_, i) => i !== 1))[phase];

  return (
    <>
      {priceData &&
        priceData.map((row, i) => {
          const {label, value} = row;
          const isLast = i === priceData.length - 1;
          return (
            <PriceRowWrapper>
              <Text
                level={isLast ? 3 : 1}
                fontWeight={isLast ? 'bold' : 'medium'}>
                {label}
              </Text>
              <Text
                level={isLast ? 3 : 1}
                fontWeight={isLast ? 'bold' : 'regular'}
                color={isLast ? SALE_RED : BLACK}>
                {value < 0 ? `(-) ` : ''}
                {addCommaToNumber(value)}원
              </Text>
            </PriceRowWrapper>
          );
        })}
      <Button
        title={text}
        onPress={
          isValid[phase]
            ? onPress
            : () => {
                if (props.alert) {
                  props.alert[phase]();
                } else {
                  Alert.alert('모두 입력해주세요.');
                }
              }
        }
        style={{width: rem(328), marginTop: rem(6)}}
      />
    </>
  );
}

/*
const Button = styled.button`
  width: 3.28rem;
  height: fit-content;
  padding: 0.1rem 0;
  margin: 0.06rem auto 0;
  border-radius: 9999px;
  background-color: ${BLACK};
  display: flex;
  justify-content: center;
  align-items: center;
`;*/

const PriceRowWrapper = styled(Row)({
  justifyContent: 'space-between',
  width: rem(328),
  marginVertical: rem(6),
  marginHorizontal: 'auto',
});
