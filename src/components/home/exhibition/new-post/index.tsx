import React from 'react';

import Text from '@src/modules/atoms/text';

export type NewPostProps = {
  haewon: number;
};

export default function NewPost(props: NewPostProps) {
  return <Text>나는 최신글 리스트 입니다.</Text>;
}
