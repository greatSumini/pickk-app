import React from 'react';

import Text from '@src/modules/atoms/text';
import colors from '@src/constants/colors';

export type ExhibitionHeaderProps = {
  title: string;
  description: string;
  route: string;
};

export default function ExhibitionHeader({
  title,
  description,
  route,
}: ExhibitionHeaderProps) {
  return (
    <>
      <Text level={3} fontWeight='bold'>
        {title}
      </Text>
      <Text level={1} color={colors.secondary}>
        {description}
      </Text>
    </>
  );
}
