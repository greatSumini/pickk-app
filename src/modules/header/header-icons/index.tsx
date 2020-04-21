import React from 'react';
import styled from 'styled-components/native';

import HeaderIconProps from './props';
import rem from '@src/constants/rem';
import IconButton from '@src/modules/atoms/buttons/icons';
import Space from '@src/modules/atoms/space';

export default function Icons(icons: HeaderIconProps[]) {
  return icons.map((item, index) => (
    <Row key={index}>
      <Space direction='ROW' level={2} />
      <IconButton
        Icon={item.Icon}
        fill={item.fill}
        size={rem(20)}
        onPress={item.onPress}
      />
    </Row>
  ));
}

const Row = styled.View({
  flexDirection: 'row',
});
