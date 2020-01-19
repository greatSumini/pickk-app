import React from 'react';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Space from '@src/modules/atoms/space';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

export type QuickMenuButtonProps = {
  width: number;
  height: number;
  // tslint:disable-next-line: no-any
  Icon: React.FunctionComponent<any>;
  label: string;
};

export default function QuickMenuButton({
  width,
  height,
  Icon,
  label,
}: QuickMenuButtonProps) {
  return (
    <Touchable>
      <Wrapper>
        <IconWrapper>
          <Icon
            style={{width: rem(width), height: rem(height)}}
            fill={colors.primary}
          />
        </IconWrapper>
        <Space />
        <Text fontWeight='medium'>{label}</Text>
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const IconWrapper = styled.View({
  width: rem(48),
  height: rem(48),
  borderRadius: rem(16),
  backgroundColor: colors.lightGrey,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
