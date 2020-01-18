import React from 'react';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Space from '@src/modules/atoms/space';
import RefreshIcon from '@src/assets/icons/refresh';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

import {PAGE_NUM} from '..';

export type MoreButtonProps = {
  current: number;
  onPress: () => void;
};

export default function RecommendLookMoreButton({
  current,
  onPress,
}: MoreButtonProps) {
  return (
    <Touchable onPress={onPress}>
      <Wrapper>
        <RefreshIcon
          style={{width: rem(14), height: rem(14)}}
          fill={colors.primary}
        />
        <Space direction='ROW' size={8} />
        <Text level={1} fontWeight='medium'>
          {`다른 LOOK 더 보기 (${current + 1}/${PAGE_NUM})`}
        </Text>
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({});

const Wrapper = styled.View({
  width: rem(228),
  paddingVertical: rem(10),
  borderRadius: rem(17),
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  borderStyle: 'solid',
  borderWidth: rem(1),
  borderColor: colors.regularGrey,
});
