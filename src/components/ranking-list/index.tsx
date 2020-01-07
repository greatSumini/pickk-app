import React from 'react';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import ScrollList from '@src/modules/list/scroll';
import Item from './item/index';

export default function RankingListScreen() {
  return (
    <Wrapper>
      <ScrollList
        category="getItemRanking"
        query={GET_ITEM_RANKING}
        ListItem={Item}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flex: 1,
});

const GET_ITEM_RANKING = gql`
  query getItemRanking($start: Int!, $first: Int!) {
    getItemRanking(
      itemRankingOption: {filterGeneral: {start: $start, first: $first}}
    ) {
      brandId
      brandKor
      brandEng
      id
      groupId
      name
      originalPrice
      salePrice
      imageUrl
      purchaseUrl
      averageScore
      pickCount
      itemMinorType
      itemMajorType
      itemFinalType
    }
  }
`;
