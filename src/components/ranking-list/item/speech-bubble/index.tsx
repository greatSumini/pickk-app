import React from 'react';
import styled from 'styled-components/native';
import {useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import SpeechBubbleProps from './props';

export default function SpeechBubble(props: SpeechBubbleProps) {
  const {id} = props;

  const {networkStatus, loading, error, data} = useQuery(GET_SHORT_REVIEW, {
    variables: {
      id: id,
    },
  });
  if (error) {
    return <Text>error</Text>;
  }

  return (
    <Wrapper>
      <TopTriangle />
      <Content>
        <Text color={colors.white} level={2}>
          {data ? data.allItemReviews[0].shortReview : ''}
        </Text>
        <Space direction="COL" level={1} />
        <UserInfo>
          {data && (
            <ProfileImg
              source={{
                uri: data.allItemReviews[0].userInfo.profileImageUrl,
              }}
            />
          )}
          <Space direction="ROW" />
          <Text color={colors.white}>
            {data ? data.allItemReviews[0].userInfo.name : ''}
          </Text>
        </UserInfo>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
});

const TopTriangle = styled.View({
  position: 'relative',
  top: 0,
  left: rem(26),
  width: rem(4),
  height: rem(4),
  borderWidth: rem(6),
  borderBottomColor: colors.backgroundBlack,
  borderTopColor: 'transparent',
  borderLeftColor: 'transparent',
  borderRightColor: 'transparent',
});

const Content = styled.View({
  width: '100%',
  backgroundColor: colors.backgroundBlack,
  borderRadius: rem(10),
  paddingHorizontal: rem(16),
  paddingVertical: rem(8),
  justifyContent: 'space-between',
});

const UserInfo = styled.View({
  flexDirection: 'row',
});

const ProfileImg = styled.Image({
  width: rem(12),
  height: rem(12),
  borderRadius: rem(6),
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
      itemId
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
