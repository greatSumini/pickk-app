import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import {OrderItemType} from '@src/types';
import {Text, Space, Touchable} from '@src/modules/atoms';
import {rem, BLACK} from '@src/constants';
import ChevronRightIcon from '@src/assets/icons/chevron/right';
import {useNavigation} from '@react-navigation/native';

export type OrderListItemHeaderProps = Pick<
  OrderItemType,
  'merchantUid' | 'orderId' | 'createdAt'
>;

function OrderListItemHeader({
  merchantUid,
  orderId,
  createdAt,
}: OrderListItemHeaderProps) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <InfoWrapper>
        <Text fontWeight='medium'>{`NO. ${merchantUid}`}</Text>
        <Space />
        <Text level={-1}>{moment(createdAt).format('YYYY.MM.DD')}</Text>
        <Space />
      </InfoWrapper>
      <Touchable onPress={() => navigation.navigate('Main')}>
        <ChevronRightIcon
          style={{width: rem(17), height: rem(17)}}
          fill={BLACK}
        />
      </Touchable>
    </Wrapper>
  );
}

export default React.memo(OrderListItemHeader);

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginTop: rem(12),
  borderBottomWidth: rem(1),
  borderBottomColor: BLACK,
});

const InfoWrapper = styled.View({});
