import React from 'react';
import styled from 'styled-components/native';

import ResetButton from './reset-button';
import ApplyButton from './apply-button';

export default function Bottom() {
  return (
    <Wrapper>
      <ResetButton />
      <ApplyButton />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flexDirection: 'row',
});
