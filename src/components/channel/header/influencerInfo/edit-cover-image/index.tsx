import React from 'react';
import styled from 'styled-components/native';

import CameraIcon from '@src/assets/icons/camera';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import IconText from '@src/modules/molecules/icon-text';

const ICON_SIZE = rem(12);

export default function EditCoverImage() {
  return (
    <Touchable>
      <Wrapper>
        <IconText
          Icon={CameraIcon}
          content="커버이미지 변경"
          space={rem(5)}
          textColor={colors.white}
          width={ICON_SIZE}
          height={ICON_SIZE}
          level={1}
          fill={colors.white}
        />
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({});

const Wrapper = styled.View({
  width: rem(125),
  height: rem(28),
  backgroundColor: colors.primary,
  justifyContent: 'center',
  alignItems: 'center',
});
