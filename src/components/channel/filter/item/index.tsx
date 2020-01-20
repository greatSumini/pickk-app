import React from 'react';
import {useQuery} from 'react-apollo';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import FilterButton from './filter-button';
import ItemSortSelector from './item-sort-selector';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';

export default function ItemFilter({id}) {
  const {loading, data, error} = useQuery(GET_REVIEWLIST_META, {
    variables: {
      id,
    },
  });

  const metaDataHandler = () => {
    if (loading) {
      return '...';
    } else if (error) {
      return 'error';
    }
    return data._allItemReviewsMetadata;
  };

  return (
    <>
      <FilterButton />
      <RightWrapper>
        <Text>{metaDataHandler() + '개'}</Text>
        <Space direction="ROW" size={16} />
        <ItemSortSelector />
      </RightWrapper>
    </>
  );
}

const RightWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const GET_REVIEWLIST_META = gql`
  query reviewListMeta($id: Int!) {
    _allItemReviewsMetadata(reviewOption: {reviewFilter: {userId: $id}})
  }
`;
