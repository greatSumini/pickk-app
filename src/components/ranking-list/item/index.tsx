import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import ItemDescription from './item-description';
import ItemProps from './props';
import SpeechBubble from './speech-bubble';

export default function Item(props: ItemProps) {
  const {id} = props;

  return (
    <Touchable>
      <Wrapper>
        <ItemDescription {...props} />
        <SpeechBubble id={id} />
      </Wrapper>
    </Touchable>
  );
}
const Touchable = styled(TouchableCmp)({
  width: '100%',
});

const Wrapper = styled.View({
  width: '100%',
  paddingHorizontal: rem(12),
  paddingVertical: rem(6),
  borderBottomWidth: 1,
  borderBottomColor: colors.lightGrey,
});
