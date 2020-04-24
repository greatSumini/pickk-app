import React from 'react';
import styled from 'styled-components/native';

import colors, {BLACK, MIDDLE_GREY} from '@src/constants/colors';
import rem from '@src/constants/rem';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';
import Img from '@src/modules/atoms/img';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import SpeechBubbleProps from './props';
import {View} from 'react-native';
import {tagEnToKo} from '@src/data/post/tag';

function SpeechBubble(props: SpeechBubbleProps) {
  const {data} = props;

  return (
    <>
      <UserInfo>
        <Text level={2} fontWeight='bold'>
          #{tagEnToKo[data.recommendReason]}
        </Text>
        <View style={{flexDirection: 'row'}}>
          {data && (
            <Img
              imgWidth={rem(12)}
              imgHeight={rem(12)}
              circle
              source={{
                uri: addSizeToImagePath(
                  data.userInfo.profileImageUrl,
                  ImageSize.Xsmall,
                ),
              }}
            />
          )}
          <Space direction='ROW' />
          <Text fontWeight='medium' color={BLACK} lines={2}>
            {data ? data.userInfo.name : ''}
          </Text>
        </View>
      </UserInfo>
      <Wrapper>
        <Content>
          <Text color={BLACK} level={2} style={{height: rem(20)}}>
            {data ? data.shortReview : ''}
          </Text>
        </Content>
      </Wrapper>
    </>
  );
}

export default React.memo(
  SpeechBubble,
  (prev, next) => prev.data.shortReview === next.data.shortReview,
);

const Wrapper = styled.View({
  flex: 1,
});

const Content = styled.View({
  width: '100%',
  backgroundColor: '#f0f0f0',
  borderWidth: rem(1),
  borderColor: '#999',
  borderRadius: rem(10),
  paddingHorizontal: rem(16),
  paddingVertical: rem(8),
  justifyContent: 'space-between',
});

const UserInfo = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  paddingHorizontal: rem(8),
});
