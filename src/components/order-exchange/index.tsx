import React, {useState} from 'react';
import styled from 'styled-components/native';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';
import {useAppContext} from '@src/context/app';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import OrderItemService from '@src/services/OrderItem';
import {Shipment, Product} from '@src/types';
import OrderClaimProgressBar from '../order-claim/progress/bar';
import OrderClaimHeader from '../order-claim/header';
import OrderClaimReason from '../order-claim/reason';
import OrderClaimFooter from '../order-claim/footer';
import {useOrderItem} from '@src/hooks/orderItem';
import OrderExchangePhase0 from './phase0';
import {OrderExchangePhase0ProductCardProps} from './phase0/product-card';
import OrderExchangePhase1 from './phase1';
import {OrderExchangePhase1ProductCardProps} from './phase1/product-card';
import {WHITE} from '@src/constants';

export default function OrderExchangeScreen() {
  const [phase, setPhase] = useState(0);
  const [exchangeProduct, setExchangeProduct] = useState<
    Product & {id: number}
  >(null);
  const [shipment, setShipment] = useState<Shipment>({
    courier: '',
    trackingCode: '',
  });
  const [reason, setReason] = useState('');
  const [dontKnow, setDontKnow] = useState(false);
  const [sent, setSent] = useState(false);
  const [isSubmitting, setSubmitting] = useState(false);

  const navigation = useNavigation();
  const route = useRoute<RouteProp<AppStackParams, 'OrderExchange'>>();
  const {id: orderItemId} = route.params;

  const {generateConfig} = useAppContext().action;
  const {data: orderItem} = useOrderItem(orderItemId, generateConfig);
  const title = '옵션 교환';
  const name = '교환';

  const handleComplete = async () => {
    if (isSubmitting) {
      return;
    }
    setSubmitting(true);
    try {
      await OrderItemService.exchange(
        orderItemId,
        exchangeProduct.id,
        shipment,
        reason,
        generateConfig,
      );
      navigation.navigate('OrderClaimComplete', {type: 'exchange'});
    } catch (err) {
      console.log(err.response);
      Alert.alert(
        err?.response?.data?.errorMessage ||
          '교환 신청에 실패했습니다.\n문의 남겨주시면 신속히 처리해드리겠습니다.\n이용에 불편을 드려 죄송합니다.',
      );
    }
    setSubmitting(false);
  };

  const isValid = [
    !!exchangeProduct,
    (dontKnow || (shipment.courier !== '' && shipment.trackingCode !== '')) &&
      sent,
    reason.length !== 0,
  ];

  const inValidAlert = [
    () => Alert.alert('교환할 옵션을 선택해주세요.'),
    () => {
      if (
        !dontKnow &&
        (shipment.courier === '' || shipment.trackingCode === '')
      ) {
        Alert.alert('택배사와 운송장 번호를 입력해주세요.');
        return;
      }
      if (!sent) {
        Alert.alert('반품 예약 접수 여부를 체크해주세요.');
      }
    },
    () => Alert.alert('교환 사유를 입력해주세요.'),
  ];

  if (!orderItem) return <></>;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}>
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <Wrapper contentContainerStyle={{alignItems: 'center'}}>
          <OrderClaimHeader {...{phase, setPhase, title}} />
          <OrderClaimProgressBar phase={phase} />
          {phase === 0 && (
            <OrderExchangePhase0
              itemId={orderItem.itemId}
              {...{setExchangeProduct}}
              {...(orderItem as OrderExchangePhase0ProductCardProps)}
            />
          )}
          {phase === 1 && (
            <OrderExchangePhase1
              orderItemId={orderItem.id}
              optionValues={exchangeProduct.values}
              {...{setExchangeProduct}}
              {...(orderItem as Omit<
                OrderExchangePhase1ProductCardProps,
                'optionValues'
              >)}
              {...{shipment, setShipment, dontKnow, setDontKnow, sent, setSent}}
            />
          )}
          {phase === 2 && <OrderClaimReason {...{reason, setReason, title}} />}
          <OrderClaimFooter
            {...{phase, setPhase, name, isValid}}
            onComplete={handleComplete}
            alert={inValidAlert}
          />
        </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const Wrapper = styled.ScrollView({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: WHITE,
});
