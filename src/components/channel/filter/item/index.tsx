import React from 'react';
import {useQuery} from 'react-apollo';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import FilterButton from '@src/modules/molecules/filter/default-filter-button';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import SortSelector from '@src/modules/molecules/filter/sort-selector';

const sortItems = [
  {
    label: '최신순',
    value: {sortBy: 'time', sort: 'DESC'},
  },
  {
    label: '별점순',
    value: {sortBy: 'score', sort: 'DESC'},
  },
];

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
        <Space direction='ROW' size={16} />
        <SortSelector sortItems={sortItems} />
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
