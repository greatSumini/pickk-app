import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Alert, KeyboardAvoidingView, Platform} from 'react-native';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';

import OrderService from '@src/services/Order';
import OrderClaimHeader from '../order-claim/header';
import OrderClaimProgressBar from '../order-claim/progress/bar';
import OrderCancelProductList from '../order-cancel/product/list';
import {useRefundContext, withRefundContext} from '@src/context/refund';
import OrderRefundPhase1 from './phase1';
import {useAppContext} from '@src/context/app';
import OrderClaimReason from '../order-claim/reason';
import OrderClaimFooter from '../order-claim/footer';
import {WHITE} from '@src/constants';

function OrderRefundScreen() {
  const {generateConfig} = useAppContext().action;
  const navigation = useNavigation();
  const route = useRoute<RouteProp<AppStackParams, 'OrderRefund'>>();
  const {id} = route.params;
  const [phase, setPhase] = useState(0);

  const {state, action} = useRefundContext();
  const {packageResponse, shipment, reason, selected, dontKnow, sent} = state;
  const {
    setShipment,
    setReason,
    isSelected,
    toggleSelect,
    getPrice,
    setDontKnow,
    setSent,
  } = action;
  const [isSubmitting, setSubmitting] = useState(false);

  const orderItemId = Number(id);
  const title = '환불 요청';
  const name = '환불';

  const handleComplete = async () => {
    if (isSubmitting) {
      return;
    }
    setSubmitting(true);
    try {
      await OrderService.refund(
        [...selected].map((item) => item.id),
        shipment,
        reason,
        generateConfig,
      );
      navigation.navigate('OrderClaimComplete', {type: 'refund'});
    } catch (err) {
      switch (err?.response?.status) {
        case 400:
        case 430:
          Alert.alert(`${err.response.data?.errorMessage}\n다시 확인해주세요.`);
          break;
        case 401:
          Alert.alert(`로그인 되어있지 않습니다.\n다시 접속해주세요.`);
          navigation.goBack();
          break;
        case 403:
          Alert.alert(
            `${err.response.data?.errorMessage}\n다시 확인 후 시도해주세요.`,
          );
          navigation.goBack();
          break;
        case 404:
          Alert.alert(`주문을 찾을 수 없습니다.\n다시 확인 후 시도해주세요.`);
          navigation.goBack();
          break;
        default:
          Alert.alert(
            `${
              err.response.data?.errorMessage || '반품 신청에 실패했습니다.'
            }\n문의 메일(cs@mugles.com) 주시면 신속히 처리해드리겠습니다.\n이용에 불편을 드려 죄송합니다.`,
          );
          navigation.goBack();
          break;
      }
      throw err;
    }
    setSubmitting(false);
  };

  const isValid = [
    selected.size !== 0,
    (dontKnow || shipment.courier !== '') && sent,
    reason.length !== 0,
  ];

  const inValidAlert = [
    () => Alert.alert('반품할 제품을 선택해주세요.'),
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
    () => Alert.alert('반품 사유를 입력해주세요.'),
  ];

  const {shippingFee, totalPaidAmount, claimedAmount} = getPrice();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'position' : 'height'}>
      <Wrapper contentContainerStyle={{alignItems: 'center'}}>
        <OrderClaimHeader {...{phase, setPhase, title}} />
        <OrderClaimProgressBar {...{phase}} />
        {phase === 0 && (
          <OrderCancelProductList
            order={[packageResponse]}
            {...{isSelected, toggleSelect}}
          />
        )}
        {phase === 1 && (
          <OrderRefundPhase1
            label='배송비를 제외한 환불금액'
            value={claimedAmount - shippingFee}
            isLast
            {...{
              orderItemId,
              shipment,
              setShipment,
              dontKnow,
              setDontKnow,
              sent,
              setSent,
            }}
          />
        )}
        {phase === 2 && <OrderClaimReason {...{reason, setReason, title}} />}
        <OrderClaimFooter
          {...{phase, setPhase, name, isValid}}
          onComplete={handleComplete}
          alert={inValidAlert}
          priceData={
            phase === 0
              ? [
                  {label: '총 결제금액', value: totalPaidAmount},
                  {label: '총 배송비', value: shippingFee * -1},
                  {
                    label: '총 환불금액',
                    value:
                      claimedAmount === 0
                        ? claimedAmount
                        : claimedAmount - shippingFee,
                  },
                ]
              : null
          }
        />
      </Wrapper>
    </KeyboardAvoidingView>
  );
}

export default withRefundContext(OrderRefundScreen);

const Wrapper = styled.ScrollView({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: WHITE,
});
