import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import BriefIntroduceProps from './props';

export default function BriefIntroduce({content, edit}: BriefIntroduceProps) {
  return (
    <Touchable>
      <Wrapper edit={edit}>
        <Text level={1} color={colors.white}>
          "
        </Text>
        <Text level={1} color={colors.white}>
          {content}
        </Text>
        <Text level={1} color={colors.white}>
          "
        </Text>
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({});

const Wrapper = styled.View<{edit: boolean}>(({edit}) => ({
  width: rem(304),
  height: rem(28),
  backgroundColor: edit ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.5)',
  marginBottom: rem(15),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: rem(25),
  borderWidth: edit && rem(1),
  borderColor: colors.white,
}));
