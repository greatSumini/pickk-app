import React from 'react';
import styled from 'styled-components/native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';

import TitleHeader from '@src/modules/molecules/header/title';
import {Text, Col, Button, Space} from '@src/modules/atoms';
import {rem, BLACK, SALE_RED, WHITE} from '@src/constants';
import ReceiptIcon from '@src/assets/icons/receipt';

const CLAIM_DATA = {
  cancel: {
    title: '주문 취소',
    description: '기존 결제수단을 통하여 결제가 취소됩니다.',
  },
  exchange: {
    title: '옵션 교환',
    description: '기존 제품 검수 후 교환품을 보내드립니다.',
  },
  refund: {
    title: '환불 요청',
    description: '기존 결제수단을 통하여 환불됩니다.',
  },
};

export default function OrderClaimCompleteScreen() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<AppStackParams, 'OrderClaimComplete'>>();
  const {type} = route.params;
  const {title, description} = CLAIM_DATA[type];

  return (
    <Wrapper>
      <TitleHeader title={title} />
      <Space level={12} />
      <ReceiptIcon style={{width: rem(74), height: rem(88)}} fill={BLACK} />
      <Space level={1} />
      <Text level={3} fontWeight='bold'>
        {title} 완료
      </Text>
      <Space size={8} />
      <Text level={1}>{title}이(가) 완료되었습니다.</Text>
      <Space level={1} />
      <Text level={1} fontWeight='medium' color={SALE_RED}>
        * {description}
      </Text>
      <Space level={8} />
      <Button
        title='마이 페이지로'
        style={{width: rem(328)}}
        onPress={() => navigation.navigate('My')}
      />
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  backgroundColor: WHITE,
  flex: 1,
});
