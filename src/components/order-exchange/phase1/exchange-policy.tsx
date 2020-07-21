import React from 'react';
import styled from 'styled-components/native';
import {Linking} from 'react-native';
import {useAppContext} from '@src/context/app';

import {useExchangePolicy} from '@src/hooks/orderItem';
import Section, {SectionSize} from '@src/modules/molecules/section';
import {rem, SALE_RED, LIGHT_GREY, BLACK} from '@src/constants';
import {Text, Labeled} from '@src/modules/atoms';

export type OrderExchangePolicyProps = {
  orderItemId: number;
};

function OrderExchangePolicy(props: OrderExchangePolicyProps) {
  const {generateConfig} = useAppContext().action;
  const {orderItemId} = props;
  const {data: exchangePolicy} = useExchangePolicy(orderItemId, generateConfig);

  if (!exchangePolicy) return <></>;
  const {
    fee,
    name,
    phone,
    bankAccount,
    courier,
    courierUrl,
    address,
    transRequired,
    courierContactNumber,
  } = exchangePolicy;

  const DATA = [
    {label: '반품예약 바로가기', value: courierUrl},
    {
      label: '택배사',
      value: courier,
    },
    {
      label: '택배사 문의 번호',
      value: courierContactNumber,
    },
    {
      label: '발송유형',
      value: '착불',
    },
    {
      label: '동봉/입금비용',
      value: fee + ' 원',
    },
    {
      label: '반송처',
      value: address,
    },
    {
      label: '받는이',
      value: name,
    },
    {
      label: '전화번호',
      value: phone,
    },
    {
      label: '계좌번호',
      value: bankAccount,
    },
  ];

  return (
    <>
      <NoticeWrapper>
        <Text level={3} fontWeight='medium' lines={transRequired ? 3 : 2}>
          아래 택배사를 이용하여{' '}
          <Text level={3} color={SALE_RED} fontWeight='bold'>
            착불로 반품 예약 후,{' '}
            {transRequired
              ? `아래 계좌에 ${fee}원을 입금해주세요.`
              : `현금 ${fee}원을 택배에 동봉해주세요.`}
          </Text>
          {transRequired && (
            <Text level={3} fontWeight='medium' color={BLACK}>
              {`\n(주문자명과 동일한 입금자명을 사용해주세요.)`}
            </Text>
          )}
        </Text>
      </NoticeWrapper>
      <Section size={SectionSize.Small} title='반송지 정보'>
        {DATA.filter((v) => v.value).map((v) => {
          return v.label === '반품예약 바로가기' ? (
            <Labeled
              label={v.label}
              children={
                <Text
                  level={1}
                  fontWeight='regular'
                  color={BLACK}
                  onPress={() => Linking.openURL(v.value)}
                  lines={2}
                  textAlign='right'
                  style={{maxWidth: rem(240), textDecorationLine: 'underline'}}>
                  {v.value}
                </Text>
              }
            />
          ) : (
            <Labeled label={v.label} text={v.value} />
          );
        })}
      </Section>
    </>
  );
}

export default React.memo(OrderExchangePolicy);

const NoticeWrapper = styled.View({
  width: '100%',
  paddingVertical: rem(16),
  paddingRight: rem(40),
  paddingLeft: rem(18),
  backgroundColor: LIGHT_GREY,
});
