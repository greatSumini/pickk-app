import React from 'react';
import styled from 'styled-components/native';

import Header, {ExhibitionHeaderProps} from './header';
import Space from '@src/modules/atoms/space';
import rem from '@src/constants/rem';

export type HomeExhibitionProps = ExhibitionHeaderProps & {
  children: React.ReactNode;
};

export default function HomeExhibition(props: HomeExhibitionProps) {
  const headerProps: ExhibitionHeaderProps = props;

  return (
    <Wrapper>
      <Header {...headerProps} />
      <Space level={1} />
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  paddingTop: rem(20),
  paddingHorizontal: rem(16),
});
