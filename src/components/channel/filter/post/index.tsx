import React from 'react';
import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import {FilterWrapper} from '../index';
import PostTypeSwitchSelector from './post-type-switch';
import PostSortSelector from './post-sort-selector';

export default function PostFilter({id}) {
  const {loading, data, error} = useQuery(GET_RECOMMENDLIST_META, {
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
    return data._allRecommendPostsMetadata;
  };

  return (
    <FilterWrapper>
      <PostTypeSwitchSelector />
      <Right>
        <Text>{metaDataHandler() + '개'}</Text>
        <Space direction="ROW" size={16} />
        <PostSortSelector />
      </Right>
    </FilterWrapper>
  );
}

const Right = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const GET_RECOMMENDLIST_META = gql`
  query recPostMeta($id: Int!) {
    _allRecommendPostsMetadata(
      recommendPostOption: {postFilter: {accountId: $id, minimumPickCount: 0}}
    )
  }
`;
