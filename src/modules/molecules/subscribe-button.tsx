import React, {useState} from 'react';
import {StyleProp, ViewStyle, Alert} from 'react-native';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '../atoms/text';
import TouchableCmp from '../atoms/touchable-component';

type SubscribeButtonProps = {
  accountId: number;
  style?: StyleProp<ViewStyle>;
};

export default function SubscribeButton({
  accountId,
  style,
}: SubscribeButtonProps) {
  const userId = 509; // 테스트용 userId 로그인 기능 구현 후 수정해야함
  const [isSubscribing, setSubscribing] = useState(false);

  const [followTarget /*{ error, data }*/] = [() => {}];

  const subscribeText = isSubscribing ? '구독 됨' : '구독하기';

  const handleSubscribe = () => {
    // 로그인 되었는지 확인과정 추가해야함

    followTarget();
    /*.then((res) => {
        if (res) {
          if (isSubscribing) {
            Alert.alert('구독', '구독이 취소됐습니다.', [
              {text: 'ok', onPress: () => {}},
            ]);
          } else {
            Alert.alert('구독', '구독이 완료됐습니다.', [
              {text: 'ok', onPress: () => {}},
            ]);
          }
          setSubscribing(!isSubscribing);
        }
      })
      .catch((error) => {
        Alert.alert('구독', '실패했습니다', [{text: 'ok', onPress: () => {}}]);
        console.error(
          'TEST ERR =>',
          error.graphQLErrors.map((x) => x.message),
        );
      });*/
  };

  const {loading, data} = {
    loading: false,
    data: null,
  }; /*useQuery(IS_FOLLOWING_TARGET, {
    variables: {
      accountId: userId,
      targetId: accountId,
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: () => {
      setSubscribing(data.isFollowingTarget);
    },
  });*/

  if (loading) return <Text>Loading....</Text>;

  return (
    <Button onPress={handleSubscribe}>
      <Wrapper {...{style, isSubscribing}}>
        <Text level={1} color={isSubscribing ? colors.white : colors.primary}>
          {subscribeText}
        </Text>
      </Wrapper>
    </Button>
  );
}

const Button = styled(TouchableCmp)({});

const Wrapper = styled.View<{isSubscribing: boolean}>((props) => ({
  backgroundColor: props.isSubscribing ? colors.primary : colors.white,
  width: rem(125),
  paddingVertical: rem(5),
  alignItems: 'center',
}));
