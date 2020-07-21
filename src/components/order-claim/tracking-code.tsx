import React from 'react';
import styled from 'styled-components/native';
import {TextInput} from 'react-native';

import Util from '@src/lib/utils';
import {Shipment} from '@src/types';
import Section, {SectionSize} from '@src/modules/molecules/section';
import CheckButton from '@src/modules/molecules/button/check';
import Picker from '@src/modules/atoms/picker';
import {Text, Row, Space} from '@src/modules/atoms';
import {rem, BLACK, REGULAR_GREY, LIGHT_GREY, WHITE} from '@src/constants';

export type OrderClaimTrackingCodeProps = {
  shipment: Shipment;
  setShipment: React.Dispatch<React.SetStateAction<Shipment>>;
  dontKnow: boolean;
  setDontKnow: React.Dispatch<React.SetStateAction<boolean>>;
};

const COURIER_DATA = [
  'CJ대한통운',
  '우체국택배',
  '롯데택배',
  '로젠택배',
  '한진택배',
  '천일택배',
  'CU편의점택배',
  'GSPostbox택배',
  'CWAY(WooriExpress)',
  '대신택배',
  '한의사랑택배',
  '합동택배',
  '홈픽',
  '한서호남택배',
  '일양로지스',
  '경동택배',
  '건영택배',
  'SLX',
  'TNT',
  'EMS',
  'DHL',
  'Fedex',
  'UPS',
  'USPS',
];

function OrderClaimTrackingCode(props: OrderClaimTrackingCodeProps) {
  const {shipment, setShipment, dontKnow, setDontKnow} = props;

  console.log(shipment);
  const handleChange = (name: string, value: any) => {
    const newShipment = {
      ...shipment,
      [name]: value,
    };
    setShipment(newShipment);
  };

  const handleDontKnow = () => {
    if (!dontKnow) {
      setShipment({courier: '', trackingCode: ''});
    }
    setDontKnow(!dontKnow);
  };

  return (
    <Section size={SectionSize.Small} title='운송장 입력' noLine={false}>
      <Space level={1} />
      <Wrapper>
        <Picker
          value={shipment.courier}
          style={{
            width: rem(110),
            height: rem(32),
            fontSize: rem(12),
            padding: rem(8),
            borderWidth: rem(1),
            borderColor: REGULAR_GREY,
          }}
          placeholder={{
            label: '택배사 선택',
            value: '',
            color: BLACK,
          }}
          disabled={dontKnow}
          items={COURIER_DATA.map((v) => {
            return {key: v, label: v, value: v, color: BLACK};
          })}
          onChange={(value) => handleChange('courier', value)}
        />
        <Space size={8} direction='ROW' />
        <StyledTextInput
          value={shipment.trackingCode}
          onChange={(value) => handleChange('trackingCode', value)}
          placeholder='‘-’을 제외한 숫자만 입력해주세요.'
          editable={!dontKnow}
          selectTextOnFocus={!dontKnow}
        />
      </Wrapper>
      <Space level={1} />
      <DontKnowWrapper>
        <CheckButton
          width={rem(16)}
          height={rem(16)}
          onPress={handleDontKnow}
          selected={dontKnow}
        />
        <Space direction='ROW' />
        <Text level={1} fontWeight='medium'>
          운송장 번호가 기억나지 않아요.
        </Text>
      </DontKnowWrapper>
      <Space level={1} />
    </Section>
  );
}

export default React.memo(
  OrderClaimTrackingCode,
  (prev, next) =>
    Util.isEqualObject(prev.shipment, next.shipment) &&
    prev.dontKnow === next.dontKnow,
);

const Wrapper = styled(Row)({
  paddingHorizontal: rem(16),
});

const DontKnowWrapper = styled(Row)({
  paddingHorizontal: rem(16),
});

const StyledTextInput = styled(TextInput)<{
  editable: boolean;
  selectTextOnFocus: boolean;
}>(({editable, selectTextOnFocus}) => {
  return {
    width: 'auto',
    height: rem(32),
    paddingVertical: rem(8),
    paddingHorizontal: rem(12),
    flex: 1,
    borderRadius: rem(8),
    borderStyle: 'solid',
    borderWidth: rem(1),
    borderColor: REGULAR_GREY,
    backgroundColor: editable && selectTextOnFocus ? WHITE : LIGHT_GREY,
  };
});
