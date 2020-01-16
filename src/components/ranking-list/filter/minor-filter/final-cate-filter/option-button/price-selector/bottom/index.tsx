import React from 'react';
import styled from 'styled-components/native';

import ResetButton from './reset-button';
import ApplyButton from './apply-button';

export default function Bottom({setVisible}) {
  return (
    <Wrapper>
      <ResetButton />
      <ApplyButton setVisible={setVisible} />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
});
