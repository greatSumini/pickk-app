import React from 'react';
import {useQuery} from 'react-apollo';
import styled from 'styled-components/native';
import gql from 'graphql-tag';

import PostSortSelector from '@src/modules/molecules/filter/post/post-sort-seletor';
import PostTypeSwitchSelector from '@src/modules/molecules/filter/post/post-type-switch';
import Space from '@src/modules/atoms/space';
import Text from '@src/modules/atoms/text';

export default function PostFilter({text}) {
  const {loading, data, error} = useQuery(GET_RECOMMENDLIST_META, {
    variables: {
      text,
    },
  });

  const metaDataHandler = () => {
    if (loading) {
      return '...';
    } else if (error) {
      if (text === '') {
        return 0;
      }
      return 'error';
    }
    return data._allRecommendPostsMetadata;
  };

  return (
    <>
      <PostTypeSwitchSelector />
      <Right>
        <Text>{metaDataHandler() + '개'}</Text>
        <Space direction='ROW' size={16} />
        <PostSortSelector />
      </Right>
    </>
  );
}

const Right = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const GET_RECOMMENDLIST_META = gql`
  query recPostMeta($text: String!) {
    _allRecommendPostsMetadata(
      recommendPostOption: {
        postFilter: {searchText: $text, minimumPickCount: 0}
      }
    )
  }
`;
