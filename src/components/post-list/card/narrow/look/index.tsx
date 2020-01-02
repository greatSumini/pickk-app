import React from 'react';
import styled from 'styled-components/native';

import PostCardNarrowLookProps from './props';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Space from '@src/modules/atoms/space';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import {parseTime} from '@src/lib/utils/time-parser';
import {imageUriHandler} from '@src/lib/utils/url-parser';

export default function NarrowLookCard({
  title,
  name,
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
  time,
  profileImageUrl,
}: PostCardNarrowLookProps) {
  return (
    <Touchable>
      <Wrapper>
        <ThumnailImg
          source={{
            uri: imageUriHandler(titleType, titleImageUrl, titleYoutubeUrl),
          }}
        />
        <Info>
          <Title>{title}</Title>
          <SubInfo>
            <UserInfo>
              <ProfileImg source={{uri: profileImageUrl}} />
              <Space direction="ROW" />
              <Name>{name}</Name>
            </UserInfo>
            <Time>{parseTime(time)}</Time>
          </SubInfo>
        </Info>
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({
  width: rem(162),
  height: rem(232),
});

const Wrapper = styled.View({
  width: rem(166),
  height: rem(232),
  margin: rem(3.5),
  borderWidth: 0.51,
  borderColor: 'transparent',
  elevation: 2,
});

const ThumnailImg = styled.Image({
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

const Title = styled(Text)({
  color: colors.primary,
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
const Name = styled(Text)({
  color: colors.secondary,
});
const Time = styled(Text)({
  color: colors.secondary,
});
