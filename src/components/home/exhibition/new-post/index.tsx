import React from 'react';

import withExhibition from '../with-exhibition';

import Text from '@src/modules/atoms/text';

function NewPost() {
  return <Text>나는 최신글 리스트 입니다.</Text>;
}

export default withExhibition(NewPost);
