import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';
import Text from '@src/modules/atoms/text';
import Name from './name';
import InfluenceInfoProps from './props';
import ProfileImage from './profile-image';
import BriefIntroduce from './brief-introduce';

const PROFILE_IMAGE_SIZE = rem(52);

export default function InfluencerInfo({data, edit}: InfluenceInfoProps) {
  const {
    name,
    profileImageUrl,
    channel_pickCount,
    channel_totalViewCount,
    channel_description,
  } = data;

  const profileImgUrl = addSizeToImagePath(profileImageUrl, ImageSize.Xsmall);

  return (
    <Wrapper>
      <ProfileImage
        source={{uri: profileImgUrl}}
        size={PROFILE_IMAGE_SIZE}
        edit={edit}
        style={{marginBottom: rem(4)}}
      />
      <Name {...{name, edit}} />
      <InfoRow>
        <InfoNode title='구독자' num={channel_pickCount} unit='명' />
        <InfoNode title='조회수' num={channel_totalViewCount} unit='회' />
      </InfoRow>
      <BriefIntroduce edit={edit} content={channel_description} />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  alignItems: 'center',
  marginTop: rem(25),
});

const InfoRow = styled.View({
  flexDirection: 'row',
  marginBottom: rem(11),
});

const InfoNodeWrapper = styled.View({
  marginTop: rem(4),
  width: rem(81),
  paddingVertical: rem(4),
  alignItems: 'center',
});

function InfoNode(props: {title: string; num: number; unit: string}) {
  const convertCount = (num) => {
    if (num < 10000) {
      return num;
    }
    return (num / 10000).toFixed(Math.max(0, 7 - Math.log10(num))) + '만';
  };

  return (
    <InfoNodeWrapper>
      <Text style={{marginBottom: rem(4)}} level={0} color={colors.white}>
        {props.title}
      </Text>
      <Text
        style={{textAlign: 'center'}}
        level={1}
        color={colors.white}
        fontWeight='bold'>
        {`${convertCount(props.num)} ${props.unit}`}
      </Text>
    </InfoNodeWrapper>
  );
}
