import React from 'react';
import styled from 'styled-components/native';

import Img from '@src/modules/atoms/img';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import {ProfileImageProps} from './props';
import colors from '@src/constants/colors';
import Text from '@src/modules/atoms/text';
import rem from '@src/constants/rem';
import {TouchableNativeFeedback} from 'react-native';
import CameraIcon from '@src/assets/icons/camera';

const ICON_SIZE = rem(16);

export default function ProfileImage({
  source,
  size,
  style,
  edit,
}: ProfileImageProps) {
  const changeProfileImage = () => {
    if (edit) {
    }
  };

  return (
    <ImgWrapper size={size} style={style}>
      <Touchable size={size} onPress={changeProfileImage}>
        <BackgroundImage source={source} size={size} edit={edit}>
          {edit && (
            <CameraIcon
              style={{width: ICON_SIZE, height: ICON_SIZE}}
              fill={colors.white}
            />
          )}
        </BackgroundImage>
      </Touchable>
    </ImgWrapper>
  );
}

const Touchable = styled(TouchableCmp)<{size: number}>(({size}) => ({
  width: size,
  height: size,
}));

const ImgWrapper = styled.View<{size: number}>(({size}) => ({
  width: size,
  height: size,
  borderRadius: size / 2,
  overflow: 'hidden',
  backgroundColor: 'rgba(0,0,0,0.5)',
}));

const BackgroundImage = styled.ImageBackground<{size: number; edit: boolean}>(
  ({size, edit}) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: edit && rem(1),
    borderColor: colors.white,
    opacity: edit && 0.9,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  }),
);
