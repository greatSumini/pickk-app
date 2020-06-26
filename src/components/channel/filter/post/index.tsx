import React from 'react';
import styled from 'styled-components/native';

import PostTypeSwitchSelector from '@src/modules/molecules/filter/post/post-type-switch';
import SortSelector from '@src/modules/molecules/filter/sort-selector';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';

const sortItems = [
  {
    label: '최신순',
    value: {sortBy: 'time', sort: 'DESC'},
  },
  {
    label: '추천순',
    value: {sortBy: 'pickCount', sort: 'DESC'},
  },
];

export default function PostFilter({id}) {
  const {loading, data, error} = {
    loading: false,
    data: null,
    error: true,
  }; /*useQuery(GET_RECOMMENDLIST_META, {
    variables: {
      id,
    },
  });*/

  const metaDataHandler = () => {
    if (loading) {
      return '...';
    } else if (error) {
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
        <SortSelector sortItems={sortItems} />
      </Right>
    </>
  );
}

const Right = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});
