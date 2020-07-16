import React from 'react';
import styled from 'styled-components/native';

import OrderListItem from './item';
import OrderListFooter from './footer';
import ScrollList from '@src/modules/list/scroll';
import BackHeader from '@src/modules/molecules/header/back';
import NoResult from '@src/modules/molecules/no-result';
import {Line} from '@src/modules/atoms';
import {WHITE} from '@src/constants';

import {listConfig} from '@src/services/OrderItem/config';

export default function OrderListScreen() {
  return (
    <Wrapper>
      <BackHeader title='주문/배송조회' />
      <ScrollList
        requestConfig={listConfig}
        ListItem={OrderListItem}
        NoResult={() => (
          <NoResult
            text='최근 주문한 내역이 없습니다.'
            button={{text: '쇼핑하러 가기', screen: 'Main'}}
          />
        )}
        listItemProp={{
          hasHeader: true,
        }}
        auth
      />
      <Line level={1} />
      <OrderListFooter />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  backgroundColor: WHITE,
  flex: 1,
});
