import React from 'react';
import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

export type RowProps = ViewProps & {
  children: React.ReactNode;
};

export default function Row(props: RowProps) {
  const {style, children} = props;

  return <Wrapper style={style}>{children}</Wrapper>;
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
});
