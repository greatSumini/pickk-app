import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import PostCardNarrowLookProps from './props';
import {Text, TouchableCmp, Space} from '@src/modules/atoms';

import {rem, colors} from '@src/constants';
import {parseTime} from '@src/lib/utils/time-parser';
import {imageUriHandler} from '@src/lib/utils/url-parser';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';

export default function NarrowLookCard({
  id,
  title,
  name,
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
  time,
  profileImageUrl,
}: PostCardNarrowLookProps) {
  const navigation = useNavigation();

  return (
    <Touchable
      onPress={() =>
        navigation.navigate('PostView', {
          id,
        })
      }>
      <Wrapper>
        <ThumbnailImg
          source={{
            uri: imageUriHandler(
              titleType,
              titleImageUrl,
              titleYoutubeUrl,
              ImageSize.Medium,
            ),
          }}
        />
        <Info>
          <Title color={colors.primary}>{title}</Title>
          <SubInfo>
            <UserInfo>
              <ProfileImg
                source={{
                  uri: addSizeToImagePath(profileImageUrl, ImageSize.Xsmall),
                }}
              />
              <Space direction='ROW' />
              <Name color={colors.secondary}>{name}</Name>
            </UserInfo>
            <Time color={colors.secondary}>{parseTime(time)}</Time>
          </SubInfo>
        </Info>
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({
  width: '50%',
  height: rem(232),
});

const Wrapper = styled.View({
  width: '100%',
  height: rem(232),
  borderWidth: rem(0.5),
  borderColor: 'transparent',
  elevation: 2,
});

const ThumbnailImg = styled.Image({
  width: rem(162),
  height: rem(162),
  alignSelf: 'center',
});

const Info = styled.View({
  width: '100%',
  height: rem(70),
  paddingHorizontal: rem(8),
  paddingTop: rem(8),
  paddingBottom: rem(12),
  justifyContent: 'space-between',
});

const SubInfo = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const UserInfo = styled.View({
  flexDirection: 'row',
});

const ProfileImg = styled.Image({
  width: rem(12),
  height: rem(12),
  borderRadius: rem(6),
});

const Title = styled(Text)({});
const Name = styled(Text)({});
const Time = styled(Text)({});
