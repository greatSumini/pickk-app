import React from 'react';
import styled from 'styled-components/native';
import {
  Platform,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

import Text from '@src/modules/atoms/text';
import PostCardWideHeaderProps from './props';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import {stringifyPassedTime} from '@src/lib/apollo/utils/time';

export default function PostCardWideHeader(props: PostCardWideHeaderProps) {
  const {time, title, name, profileImageUrl} = props;
  return (
    <Wrapper>
      <ProfileImg source={{uri: profileImageUrl}} />
      <InfoContainer>
        <Info>
          <Title level={2} width={rem(243)}>
            {title}
          </Title>
          <Name level={1}>{name}</Name>
        </Info>
        <TimeContainer>
          <Time level={1}>{stringifyPassedTime(time)}</Time>
        </TimeContainer>
      </InfoContainer>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(63),
  paddingVertical: rem(13),
  paddingHorizontal: rem(16),
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const ProfileImg = styled.Image({
  width: rem(36),
  height: rem(36),
  borderRadius: rem(18),
});

const InfoContainer = styled.View({
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: rem(8),
});

const TimeContainer = styled.View({
  height: '100%',
  justifyContent: 'flex-end',
});

const Info = styled.View({
  justifyContent: 'space-between',
});
const Title = styled(Text)({
  color: colors.primary,
});
const Name = styled(Text)({
  color: colors.secondary,
});
const Time = styled(Text)({
  color: colors.secondary,
});
