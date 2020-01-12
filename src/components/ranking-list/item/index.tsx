import React from 'react';
import {useQuery} from 'react-apollo';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Text from '@src/modules/atoms/text';
import ItemDescription from './item-description';
import ItemProps from './props';
import SpeechBubble from './speech-bubble';
import {ShortReviewContentType} from './speech-bubble/props';

export default function Item(props: ItemProps) {
  const {id} = props;

  const {networkStatus, loading, error, data} = useQuery(GET_SHORT_REVIEW, {
    variables: {
      id,
    },
  });
  if (error) {
    return <Text>error</Text>;
  }
  const shortReviewData: ShortReviewContentType =
    data && data.allItemReviews[0];

  return (
    <Touchable>
      <Wrapper>
        <ItemDescription {...props} />
        <SpeechBubble data={shortReviewData} />
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
  minHeight: rem(215),
});

const GET_SHORT_REVIEW = gql`
  query allItemReviews($id: Int!) {
    allItemReviews(
      reviewOption: {
        filterGeneral: {start: 0, first: 1}
        reviewFilter: {itemId: $id}
      }
    ) {
      shortReview
      id
      postId
      review
      score
      images {
        id
      }
      userInfo {
        id
        email
        age
        height
        weight
        name
        profileImageUrl
      }
    }
  }
`;
