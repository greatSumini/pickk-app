import React from 'react';
import styled from 'styled-components/native';

import ScreenNavigationProps from '@src/modules/types/screen-navigation-props';
import ScrollList from '@src/modules/list/scroll';
import {listConfig} from '@src/services/OrderItem/config';
import OrderListItem from './item';
import NoResult from '@src/modules/molecules/no-result';
import OrderListFooter from './footer';
import BackHeader from '@src/modules/molecules/header/back';
import {WHITE, rem} from '@src/constants';
import {Line} from '@src/modules/atoms';

export type PostListScreenProps = ScreenNavigationProps;

export default function OrderListScreen(props: PostListScreenProps) {
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
        auth
      />
      <Line level={1} />
      <OrderListFooter />
    </Wrapper>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
  backgroundColor: WHITE,
  paddingBottom: rem(12),
});
