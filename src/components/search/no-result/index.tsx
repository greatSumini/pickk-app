import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';

export default function NoResult() {
  return (
    <NoResultWrapper>
      <Text level={2} color={colors.primary}>
        검색 결과가 없습니다.
      </Text>
    </NoResultWrapper>
  );
}

const NoResultWrapper = styled.View({
  flex: 1,
  paddingTop: rem(100),
  alignItems: 'center',
});
