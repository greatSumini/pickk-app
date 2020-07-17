import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import ChevronRightIcon from '@src/assets/icons/chevron/right';
import {Text, Space, Row} from '@src/modules/atoms';
import {rem, BLACK} from '@src/constants';

import {OrderItemType} from '@src/types';

export type OrderListItemHeaderProps = Pick<
  OrderItemType,
  'merchantUid' | 'createdAt'
>;

function OrderListItemHeader({
  merchantUid,
  createdAt,
}: OrderListItemHeaderProps) {
  return (
    <Wrapper>
      <InfoWrapper>
        <Text fontWeight='medium'>{`NO. ${merchantUid}`}</Text>
        <Space />
        <Text level={-1}>{moment(createdAt).format('YYYY.MM.DD')}</Text>
        <Space />
      </InfoWrapper>
      <ChevronRightIcon
        style={{width: rem(17), height: rem(17)}}
        fill={BLACK}
      />
    </Wrapper>
  );
}

export default React.memo(OrderListItemHeader);

const Wrapper = styled(Row)({
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
