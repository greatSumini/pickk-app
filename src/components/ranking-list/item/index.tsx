import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Text from '@src/modules/atoms/text';
import ItemDescription from './item-description';
import ItemProps from './props';
import SpeechBubble from './speech-bubble';
import {ShortReviewContentType} from './speech-bubble/props';

function Item(props: ItemProps) {
  const {id} = props;

  const {loading, error, data} = {
    loading: false,
    data: null,
    error: true,
  }; /*useQuery(GET_SHORT_REVIEW, {
    variables: {
      id,
    },
  });*/

  if (error) {
    return <Text>error</Text>;
  }

  if (data) {
    return (
      <Touchable>
        <Wrapper>
          <ItemDescription {...props} />
          <SpeechBubble
            data={data.allItemReviews[0] as ShortReviewContentType}
          />
        </Wrapper>
      </Touchable>
    );
  }
  return null;
}

export default React.memo(Item, (prev, next) => prev.id === next.id);

const Touchable = styled(TouchableCmp)({
  width: '100%',
});

const Wrapper = styled.View({
  width: '100%',
  paddingHorizontal: rem(12),
  paddingVertical: rem(6),
  borderBottomWidth: 1,
  borderBottomColor: colors.lightGrey,
  height: rem(175),
});
