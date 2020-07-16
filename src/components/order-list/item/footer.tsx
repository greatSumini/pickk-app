import React from 'react';
import styled from 'styled-components/native';
import moment from 'moment';

import {
  OrderItemType,
  ClaimStatus,
  OrderItemAction,
  OrderState,
} from '@src/types';
import {Text, Space, Row, Touchable} from '@src/modules/atoms';
import {rem, LIGHT_GREY, MIDDLE_GREY, BLACK} from '@src/constants';
import OrderItemService from '@src/services/OrderItem';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export type OrderItemActionButtonData = {
  [status in OrderState | ClaimStatus]: OrderItemAction[];
};

export type OrderListItemFooterProps = Pick<
  OrderItemType,
  | 'id'
  | 'status'
  | 'itemId'
  | 'orderId'
  | 'claimStatus'
  | 'isRefundable'
  | 'isExchangeable'
>;

function OrderListItemFooter({
  status,
  claimStatus,
  id,
  itemId,
  orderId,
  isRefundable,
  isExchangeable,
}: OrderListItemFooterProps) {
  const navigation = useNavigation();
  const {
    Pending,
    PaymentFinished,
    ShipReady,
    ShipFinished,
    DeliveryFinished,
    CancelFinished,
    OrderFail,
    PurchaseConfirmed,
  } = OrderState;
  const {
    RefundReqested,
    RefundFinished,
    ExchangeRequested,
    ExchangeFinished,
    CancelRequested,
  } = ClaimStatus;
  const {
    Cancel,
    Inquire,
    Delivery,
    Confirm,
    Refund,
    Exchange,
  } = OrderItemAction;

  const handleConfirm = async () => {
    try {
      await OrderItemService.confirm(id);
      Alert.alert('구매가 확정되었습니다.');
      // refresh
    } catch {
      Alert.alert('구매 확정을 할 수 없습니다.');
    }
  };

  const handlePressList = {
    [Cancel]: () => navigation.navigate('Main'),
    [Inquire]: () => navigation.navigate('Main'),
    [Delivery]: () => navigation.navigate('Main'),
    [Confirm]: () => navigation.navigate('Main'),
    [Refund]: () => navigation.navigate('Main'),
    [Exchange]: () => navigation.navigate('Main'),
  };

  const BUTTON_DATA = {
    [Pending]: [Inquire],
    [PaymentFinished]: [Cancel, Inquire],
    [ShipReady]: [Inquire],
    [ShipFinished]: [Delivery, Inquire, Exchange, Refund],
    [DeliveryFinished]: [Confirm, Delivery, Exchange, Refund],
    [CancelFinished]: [Inquire],
    [OrderFail]: [Inquire],
    [PurchaseConfirmed]: [Inquire],
    [CancelRequested]: [Inquire],
    [ExchangeRequested]: [Inquire],
    [ExchangeFinished]: [Inquire],
    [RefundReqested]: [Inquire],
    [RefundFinished]: [Inquire],
  };

  const buttonData = BUTTON_DATA[claimStatus || status];

  return (
    <Wrapper>
      {buttonData.map((text, index) => {
        const disabled =
          (!isRefundable && text === Refund) ||
          (!isExchangeable && text === Exchange);
        const onPress = disabled
          ? () => Alert.alert(`${text}할 수 없는 브랜드입니다.`)
          : handlePressList[text];
        return (
          <React.Fragment key={index}>
            <ActionButton
              key={index}
              style={{
                width: buttonData.length === 1 ? '100%' : '47.5%',
                marginBottom:
                  buttonData.length !== 1 && index < 2 ? rem(12) : 0,
              }}>
              <Text
                level={2}
                fontWeight='medium'
                color={disabled ? MIDDLE_GREY : BLACK}>
                {text}
              </Text>
            </ActionButton>
            {(index === 0 || index === 2) && buttonData.length !== 1 && (
              <Space direction='ROW' size={16} />
            )}
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

export default React.memo(OrderListItemFooter);

const Wrapper = styled(Row)({
  justifyContent: 'space-between',
  flexWrap: 'wrap',
});

const ActionButton = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  border: 'none',
  backgroundColor: LIGHT_GREY,
  height: rem(40),
  borderRadius: rem(999),
});
