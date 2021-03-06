import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

import {Text, TouchableCmp, Space} from '@src/modules/atoms';

import {rem, colors} from '@src/constants';
import {imageUriHandler} from '@src/lib/utils/url-parser';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';

export type HomeLookCardProps = {
  id: number;
  title: string;
  name: string;
  titleType: string;
  titleImageUrl: string;
  titleYoutubeUrl: string;
  profileImageUrl: string;
};

export default function HomeLookCard({
  id,
  title,
  name,
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
  profileImageUrl,
}: HomeLookCardProps) {
  const navigation = useNavigation();

  return (
    <Touchable
      onPress={() => {
        navigation.navigate('PostView', {
          id,
        });
      }}>
      <Wrapper>
        <ThumnailImg
          source={{
            uri: imageUriHandler(
              titleType,
              titleImageUrl,
              titleYoutubeUrl,
              ImageSize.Medium,
            ),
          }}>
          <DarkOverlay />
          <UserInfo>
            <ProfileImg
              source={{
                uri: addSizeToImagePath(profileImageUrl, ImageSize.Small),
              }}
            />
            <Space direction='ROW' />
            <Name color={colors.white} fontSize={8}>
              {name}
            </Name>
          </UserInfo>
        </ThumnailImg>
        <Title color={colors.primary} fontWeight='medium' lines={2} ellipsis>
          {title}
        </Title>
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({});

const Wrapper = styled.View({
  marginBottom: rem(12),
  flexDirection: 'column',
  alignItems: 'center',
});

const ThumnailImg = styled.ImageBackground.attrs({
  imageStyle: {
    borderRadius: rem(8),
  },
})({
  width: rem(160),
  height: rem(160),
  alignSelf: 'center',
  borderRadius: rem(8),
  backgroundColor:
    'linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 0.5))',
});

const DarkOverlay = styled(LinearGradient).attrs({
  colors: ['rgba(255, 255, 255, 0)', 'rgba(0, 0, 0, 0.5)'],
})({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: rem(8),
});

const UserInfo = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  left: rem(8),
  bottom: rem(8),
});

const ProfileImg = styled.Image({
  width: rem(12),
  height: rem(12),
  borderRadius: rem(6),
  borderColor: colors.white,
  borderWidth: rem(0.2),
});

const Title = styled(Text)({
  paddingTop: rem(4),
  marginHorizontal: rem(8),
  width: rem(144),
  height: rem(30),
});
const Name = styled(Text)({});
