import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import {useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';

import BackHeader from '@src/modules/molecules/header/back';
import OrderScreenItemList, {OrderScreenItemListProps} from './item-list';
import Section, {SectionSize} from '@src/modules/molecules/section';
import {Line, Labeled, Text, Space} from '@src/modules/atoms';
import {MIDDLE_GREY} from '@src/constants';

import {addDashToPhoneNumber} from '@src/lib/utils';

import {useOrder} from '@src/hooks';
import {useAppContext} from '@src/context/app';

export default function OrderScreen() {
  const {generateConfig} = useAppContext().action;
  const route = useRoute<RouteProp<AppStackParams, 'Order'>>();
  const {data: order} = useOrder(route.params.id, generateConfig);

  if (!order) {
    return null;
  }

  const {name, phone, baseAddress, detailAddress, message} = order.address;
  const {
    totalItemPrice,
    totalShippingFee,
    totalSubscribeDiscountAmount,
    usedPoint,
    totalPaidAmount,
  } = order.payment;

  const canceledPaidAmount = order.order.reduce(
    (totalCanceledAmount, brand) => {
      return (
        totalCanceledAmount +
        brand.orderItems.reduce((brandCanceledAmount, item) => {
          const {status, paidAmount} = item;
          return status === '취소 완료'
            ? brandCanceledAmount + paidAmount
            : brandCanceledAmount;
        }, 0)
      );
    },
    0,
  );

  return (
    <Wrapper>
      <BackHeader title='주문 상세' />
      <Labeled label='주문번호' text={order.merchantUid}>
        <Text level={1} color={MIDDLE_GREY}>
          {' '}
          {moment(order.createdAt).format('(YY.MM.DD)')}
        </Text>
      </Labeled>
      <Space />
      <Line level={1} />
      <OrderScreenItemList {...(order as OrderScreenItemListProps)} />
      <Line level={1} />
      <Section title='배송지 정보' size={SectionSize.Small} noLine={false}>
        <Labeled label='수령인' text={name} />
        <Labeled label='휴대폰' text={addDashToPhoneNumber(phone)} />
        <Labeled
          label='주소지'
          text={`${baseAddress} ${detailAddress} fdsafsafdsfsdsfdsfs`}
        />
        <Labeled label='배송 메세지' text={message} />
      </Section>
      <Line level={1} />
      <Section title='결제 정보' size={SectionSize.Small} noLine={false}>
        <Labeled label='총 상품 금액' text={totalItemPrice} isPrice />
        <Labeled label='총 배송비' text={totalShippingFee} isPrice />
        <Labeled
          label='총 구독자 할인'
          text={totalSubscribeDiscountAmount}
          isPrice
          isMinus
        />
        <Labeled label='포인트 사용' text={usedPoint} isPrice isMinus />
        <Labeled
          label='총 결제금액'
          text={totalPaidAmount + totalShippingFee}
          important
          isPrice
        />
      </Section>
      {canceledPaidAmount > 0 && (
        <>
          <Line level={1} />
          <Section title='취소 정보' size={SectionSize.Small} noLine={false}>
            <Labeled label='총 취소 금액' text={canceledPaidAmount} isPrice />
          </Section>
        </>
      )}
      <Space level={2} />
    </Wrapper>
  );
}

const Wrapper = styled.ScrollView({
  width: '100%',
  backgroundColor: '#fff',
});
