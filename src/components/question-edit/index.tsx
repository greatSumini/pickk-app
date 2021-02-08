import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';
import {useAppContext} from '@src/context/app';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';
import {Alert} from 'react-native';

import {addDashToPhoneNumber} from '@src/lib/utils';
import {IQuestionInputDTO} from '@src/interfaces';
import {useItem} from '@src/hooks/Item';
import QuestionEditItemCard from './item-card';
import QuestionService from '@src/services/Question';
import Section, {SectionSize} from '@src/modules/molecules/section';
import BackHeader from '@src/modules/molecules/header/back';
import CheckButton from '@src/modules/molecules/button/check';
import Picker from '@src/modules/atoms/picker';
import ActivityIndicator from '@src/modules/atoms/activity-indicator';
import {Col, Labeled, Space, Button, Line} from '@src/modules/atoms';
import {rem, WHITE, BLACK, REGULAR_GREY} from '@src/constants';

const ITEM_QUESTION_TYPE = [
  {
    value: 'SIZE',
    name: '사이즈',
  },
  {
    value: 'STOCK',
    name: '재고',
  },
  {
    value: 'SHIPMENT',
    name: '배송',
  },
  {
    value: 'ETC',
    name: '기타',
  },
];

export default function QuestionEditScreen() {
  const {generateConfig} = useAppContext().action;
  const navigation = useNavigation();
  const route = useRoute<RouteProp<AppStackParams, 'QuestionEdit'>>();
  const {id} = route.params;
  const itemId = Number(id);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {data: itemData} = useItem(itemId);

  const [formState, setFormState] = useState<IQuestionInputDTO>({
    type: null,
    title: '',
    content: '',
    phone: '',
    isSecret: true,
    item: itemId,
  });

  useEffect(() => {
    setFormState({
      ...formState,
      item: itemId,
    });
  }, [route.params]);

  const handleFormChange = (name: string, value: any) => {
    setFormState({
      ...formState,
      [name]: name === 'phone' ? addDashToPhoneNumber(value) : value,
    });
  };

  const handleIsSecret = () => {
    setFormState({
      ...formState,
      isSecret: !formState.isSecret,
    });
  };

  const isValidForm = () => {
    const {type, title, content, phone} = formState;
    const isValid = !(
      type === null ||
      title.length === 0 ||
      title.length > 200 ||
      content.length === 0 ||
      phone.length !== 13
    );
    if (type === null) Alert.alert('문의 유형을 선택해주세요.');
    else if (title.length === 0) Alert.alert('제목을 입력해주세요.');
    else if (title.length > 200)
      Alert.alert('제목을 200자 이내로 입력해주세요.');
    else if (content.length === 0) Alert.alert('문의 내용을 입력해주세요.');
    else if (phone.length !== 13) Alert.alert('휴대전화번호를 확인해주세요');
    return isValid;
  };

  const handleSubmit = async () => {
    if (isSubmitting || !isValidForm()) {
      return;
    }
    setIsSubmitting(true);
    await QuestionService.create(formState, generateConfig);
    setIsSubmitting(false);
    Alert.alert('문의가 등록되었습니다.');
    navigation.goBack();
  };

  console.log(formState);
  return (
    <Wrapper contentContainerStyle={{alignItems: 'center'}}>
      <BackHeader title='문의하기' />
      <Line />
      <StyledCol>
        {itemData && (
          <QuestionEditItemCard
            {...{
              id: itemData.id,
              imageUrl: itemData.imageUrl,
              name: itemData.name,
              brandName: itemData.brand.nameKor,
            }}
          />
        )}
        <Line />
        <Section
          size={SectionSize.Small}
          title='문의 유형'
          children={
            <Picker
              value={formState.type}
              onChange={(value) => handleFormChange('type', value)}
              items={ITEM_QUESTION_TYPE.map((type) => ({
                label: type.name,
                value: type.value,
                color: BLACK,
              }))}
              placeholder={{
                label: '선택해주세요',
                value: '',
                color: REGULAR_GREY,
              }}
              style={{
                width: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                fontSize: rem(12),
                paddingVertical: rem(8),
                paddingHorizontal: rem(16),
                borderWidth: rem(1),
                borderColor: REGULAR_GREY,
                borderRadius: rem(8),
              }}
            />
          }
        />
        <Section
          size={SectionSize.Small}
          title='제목'
          children={
            <Input
              value={formState.title}
              placeholder='제목을 입력해주세요.'
              onChangeText={(value) => handleFormChange('title', value)}
            />
          }
        />
        <Section
          size={SectionSize.Small}
          title='내용'
          children={
            <Textarea
              multiline={true}
              value={formState.content}
              placeholder='문의하실 내용을 입력해주세요.'
              onChangeText={(value) => handleFormChange('content', value)}
            />
          }
        />
        <Section
          size={SectionSize.Small}
          title='휴대전화번호'
          children={
            <Input
              value={formState.phone}
              placeholder='전화번호를 입력해주세요.'
              onChangeText={(value) => handleFormChange('phone', value)}
            />
          }
        />
        <Labeled
          important
          label='문의 비공개하기'
          children={
            <CheckButton
              selected={formState.isSecret}
              onPress={handleIsSecret}
            />
          }
        />
      </StyledCol>
      <Space size={24} />
      {!isSubmitting && (
        <Button
          title='문의글 등록하기'
          onPress={handleSubmit}
          style={{width: rem(328)}}
        />
      )}
      {isSubmitting && <ActivityIndicator />}
    </Wrapper>
  );
}

const Wrapper = styled.ScrollView({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: WHITE,
});

const StyledCol = styled(Col)({
  paddingHorizontal: rem(16),
});

const Input = styled.TextInput({
  width: '100%',
  height: rem(32),
  borderRadius: rem(8),
  borderStyle: 'solid',
  borderWidth: rem(1),
  borderColor: REGULAR_GREY,
  fontSize: rem(12),
  fontWeight: 400,
  color: BLACK,
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
});

const Textarea = styled.TextInput({
  width: '100%',
  height: rem(140),
  borderRadius: rem(8),
  borderStyle: 'solid',
  borderWidth: rem(1),
  borderColor: REGULAR_GREY,
  fontSize: rem(12),
  fontWeight: 400,
  color: BLACK,
  paddingVertical: rem(8),
  paddingHorizontal: rem(16),
  textAlignVertical: 'top',
});
