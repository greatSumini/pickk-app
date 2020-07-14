import React from 'react';
import styled from 'styled-components/native';

import Content from './content';
import {Col} from '@src/modules/atoms';
import {rem} from '@src/constants';

const orderStateData = [
  {
    title: '결제 대기',
    desc: '주문이 접수되었으나 입금확인 중인 상태입니다.',
  },
  {
    title: '결제 완료',
    desc: '결제가 완료되어 주문서가 전달되었습니다.',
  },
  {
    title: '배송 준비',
    desc: '주문 내역 확인 후 상품을 준비하고 있습니다.',
  },
  {
    title: '배송 완료',
    desc: '상품이 고객님께 도착하여 배송이 완료되었습니다.',
  },
  {
    title: '취소 완료',
    desc: '고객님이 구매하신 주문이 취소되었습니다.',
  },
  {
    title: '구매 확정',
    desc: '고객님이 상품 수령 후 구매를 결정하신 상태입니다.',
  },
  {
    title: '교환 요청',
    desc: '고객님의 교환신청을 판매자가 확인 중에 있습니다.',
  },
  {
    title: '반품 요청',
    desc: '고객님의 환불신청을 판매자가 확인 중에 있습니다.',
  },
  {
    title: '반품 완료',
    desc: '환불신청이 처리되어 결제수단을 통해 환불될 예정입니다.',
  },
  {
    title: '구매 확정',
    desc: '주문을 구매확정한 상태입니다.',
  },
];

export default function OrderListFooter() {
  return (
    <Wrapper>
      {orderStateData.map((item, index) => (
        <Content key={index} {...item} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  paddingHorizontal: rem(16),
});
