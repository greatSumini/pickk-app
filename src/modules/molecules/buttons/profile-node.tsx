import React from 'react';
import {useQuery} from 'react-apollo';
import styled from 'styled-components/native';
import gql from 'graphql-tag';
import {withNavigation} from 'react-navigation';
import {NavigationStackProp} from 'react-navigation-stack';

import SubscribeButton from '../subscribe-button';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Image from '@src/modules/atoms/img';
import Space from '@src/modules/atoms/space';
import {ImageSize, addSizeToImagePath} from '@src/lib/utils/image-size-parser';

export type ProfileNodeProps = {
  accountId: number;
  navigation?: NavigationStackProp;
};

const SUB_TEXT = ['구독 중', '구독'];

function ProfileNode({accountId, navigation}: ProfileNodeProps) {
  const {loading, error, data} = useQuery(GET_USER_INFO, {
    variables: {
      id: accountId,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (loading) return <></>;
  if (error) return <Text>error!</Text>;

  if (data && data.getUserInfo) {
    const {name, profileImageUrl, channel_pickCount} = data.getUserInfo;
    return (
      <TouchableWrapper>
        <Touchable
          onPress={() => {
            navigation.navigate('Channel', {id: accountId});
          }}>
          <Wrapper>
            <Image
              source={{
                uri: addSizeToImagePath(profileImageUrl, ImageSize.Xsmall),
              }}
              circle
              imgWidth={rem(36)}
              imgHeight={rem(36)}
            />
            <Space direction='ROW' size={6} />
            <InfluencerData>
              <Text level={1}>{name}</Text>
              <Text
                color={
                  colors.secondary
                }>{`구독자 ${channel_pickCount}명`}</Text>
            </InfluencerData>
            <SubscribeButton
              accountId={accountId}
              text={SUB_TEXT}
              darkMode
              style={{
                width: rem(66),
                height: rem(24),
                borderRadius: 999,
                paddingVertical: 0,
              }}
            />
          </Wrapper>
        </Touchable>
      </TouchableWrapper>
    );
  }
}
const TouchableWrapper = styled.View({
  borderRadius: rem(12),
  overflow: 'hidden',
});
const Touchable = styled(TouchableCmp)({flex: 1});

const Wrapper = styled.View({
  width: rem(328),
  height: rem(52),
  borderWidth: rem(1),
  borderColor: colors.borderGrey,
  borderRadius: rem(12),
  alignSelf: 'center',
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: rem(12),
  paddingVertical: rem(8),
});

const InfluencerData = styled.View({
  width: rem(196),
});

const GET_USER_INFO = gql`
  query getUserInfo($id: Int!) {
    getUserInfo(userOption: {id: $id}) {
      name
      profileImageUrl
      channel_pickCount
    }
  }
`;

export default withNavigation(ProfileNode);
