import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import NameProps from './props';

export default function Name({name, edit}: NameProps) {
  const content = edit ? '닉네임을 입력하세요.' : name;

  return (
    <Touchable>
      <Box edit={edit}>
        <Text level={2} color="white">
          {content}
        </Text>
      </Box>
    </Touchable>
  );
}
const Touchable = styled(TouchableCmp)({});

const Box = styled.View<{edit: boolean}>(({edit}) => ({
  width: rem(150),
  height: rem(28),
  borderWidth: edit && rem(1),
  borderColor: colors.white,
  backgroundColor: edit && 'rgba(255, 255, 255, 0.1)',
  justifyContent: 'center',
  alignItems: 'center',
}));
