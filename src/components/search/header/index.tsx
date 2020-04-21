import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import IconButton from '@src/modules/atoms/buttons/icons';
import ArrowLeftIcon from '@src/assets/icons/arrow/left';

export default function Header({navigation}) {
  return (
    <Wrapper>
      <IconButton
        Icon={ArrowLeftIcon}
        size={rem(20)}
        fill={colors.primary}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Text level={3}>검색</Text>
      <Dummy />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(44),
  paddingHorizontal: rem(16),
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const Dummy = styled.View({
  width: rem(20),
  height: rem(20),
});
