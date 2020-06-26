import React, {useState} from 'react';
import styled from 'styled-components/native';

import ChannelHeaderProps from './props';
import InfluencerInfo from './influencerInfo';
import EditCoverImage from './influencerInfo/edit-cover-image';
import ArrowLeftIcon from '@src/assets/icons/arrow/left';
import IconButton from '@src/modules/atoms/buttons/icons';
import ButtonText from '@src/modules/atoms/buttons/text';
import Text from '@src/modules/atoms/text';

import {colors, rem} from '@src/constants';
import {ImageSize, addSizeToImagePath} from '@src/lib/utils/image-size-parser';

const ICON_SIZE = rem(20);

function Header({id, navigation}: ChannelHeaderProps) {
  const userId = 509;
  const [edit, setEdit] = useState(false);

  const editButtonText = edit ? '적용' : '수정';

  const {loading, error, data} = {
    loading: false,
    data: null,
    error: true,
  }; /*useQuery(GET_USER_INFO, {
    variables: {
      id,
    },
    notifyOnNetworkStatusChange: true,
  });*/

  if (loading) {
    return null;
  }

  if (error) {
    return <Text>error!</Text>;
  }

  if (data && data.getUserInfo) {
    const {channel_titleImageUrl} = data.getUserInfo;
    return (
      <Container img={channel_titleImageUrl}>
        <IconRow>
          <IconButton
            onPress={() => {
              navigation.goBack();
            }}
            Icon={ArrowLeftIcon}
            size={ICON_SIZE}
            fill={colors.white}
          />
          {edit && <EditCoverImage />}
          {userId === id && (
            <ButtonText
              content={editButtonText}
              onPress={() => {
                setEdit((prev) => !prev);
              }}
              color={colors.white}
              level={2}
            />
          )}
        </IconRow>
        <InfluencerInfo data={data.getUserInfo} edit={edit} />
        {/*<SubscribeButton accountId={id} />*/}
      </Container>
    );
  } else {
    return <Text>error</Text>;
  }
}

export default React.memo(Header);

const BackgroundImg = styled.ImageBackground({
  width: '100%',
  height: rem(291),
  paddingHorizontal: rem(16),
  paddingTop: rem(12),
  alignItems: 'center',
});

const Background = styled.View({
  width: '100%',
  height: rem(291),
  paddingHorizontal: rem(16),
  paddingTop: rem(12),
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  alignItems: 'center',
});

function Container({img, children}) {
  if (img) {
    return (
      <BackgroundImg source={{uri: addSizeToImagePath(img, ImageSize.Medium)}}>
        {children}
      </BackgroundImg>
    );
  } else {
    return <Background>{children}</Background>;
  }
}

const IconRow = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
  height: rem(28),
});
