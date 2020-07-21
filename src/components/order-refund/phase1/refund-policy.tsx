import React from 'react';
import {Linking} from 'react-native';
import styled from 'styled-components/native';
import {useAppContext} from '@src/context/app';

import {useExchangePolicy} from '@src/hooks/OrderItem';
import Section, {SectionSize} from '@src/modules/molecules/section';
import {Text, Space, Labeled} from '@src/modules/atoms';
import {SALE_RED, BLACK, rem, LIGHT_GREY} from '@src/constants';

export type OrderRefundPolicyProps = {
  orderItemId: number;
};

function OrderRefundPolicy(props: OrderRefundPolicyProps) {
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
  ];

  return (
    <>
      <NoticeWrapper>
        <Text level={3} fontWeight='medium' lines={3}>
          수령하신 택배사를 이용하여{' \n'}
          <Text level={3} color={SALE_RED} fontWeight='bold'>
            착불로 반품 예약 접수를 진행해주세요!
          </Text>
          <Text level={3} fontWeight='medium' color={BLACK}>
            {`\n(아래 반송지 정보를 참고해주세요.)`}
          </Text>
        </Text>
      </NoticeWrapper>
      <Section size={SectionSize.Small} title='반송지 정보' noLine>
        {DATA.map((v) => {
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

export default React.memo(OrderRefundPolicy);

const NoticeWrapper = styled.View({
  width: '100%',
  paddingVertical: rem(16),
  paddingRight: rem(40),
  paddingLeft: rem(18),
  backgroundColor: LIGHT_GREY,
});
