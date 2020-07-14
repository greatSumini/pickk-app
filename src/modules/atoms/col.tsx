import React from 'react';
import {ViewProps} from 'react-native';
import styled from 'styled-components/native';

export type ColProps = ViewProps & {
  children: React.ReactNode;
};

export default function Col(props: ColProps) {
  const {style, children} = props;

  return <Wrapper style={style}>{children}</Wrapper>;
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'nowrap',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
});
