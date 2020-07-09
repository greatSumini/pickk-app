import React from 'react';
import styled from 'styled-components/native';

import {Text, Image, Space} from '@src/modules/atoms';

import {rem, colors} from '@src/constants';
import {stringifyPassedTime} from '@src/lib/utils/time-parser';
import {IReview} from '@src/interfaces';

export type PostCardWideHeaderProps = Pick<
  IReview,
  'title' | 'createdAt' | 'user' | 'viewCount'
>;

export default function PostCardWideHeader({
  createdAt,
  title,
  user,
  viewCount,
}: PostCardWideHeaderProps) {
  const {name, profileImageUrl} = user;
  return (
    <Wrapper>
      <Title level={2} width={rem(336)} fontWeight={500}>
        {title}
      </Title>
      <InfoRow>
        <ProfileImg src={profileImageUrl} size='avatar' />
        <Name level={1}>{name}</Name>
        <Text level={1} color={colors.secondary}>
          조회수 {viewCount}회
        </Text>
        <Space size={8} direction='ROW' />
        <Text color={colors.secondary} level={1}>
          {stringifyPassedTime(createdAt)}
        </Text>
      </InfoRow>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(63),
  paddingVertical: rem(8),
  paddingHorizontal: rem(12),
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const ProfileImg = styled(Image)({
  width: rem(14),
  height: rem(14),
  borderRadius: rem(7),
  marginRight: rem(4),
});

const InfoContainer = styled.View({
  flex: 1,
  flexDirection: 'column',
  marginLeft: rem(8),
});

const TimeContainer = styled.View({
  height: '100%',
  justifyContent: 'flex-end',
});

const InfoRow = styled.View({
  flex: 1,
  flexDirection: 'row',
  alignItems: 'center',
});
const Title = styled(Text)({
  color: colors.primary,
});
const Name = styled(Text)({
  color: colors.secondary,
  marginRight: 'auto',
});
const Time = styled(Text)({
  color: colors.secondary,
});
