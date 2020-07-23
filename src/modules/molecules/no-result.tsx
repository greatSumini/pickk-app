import React from 'react';
import styled from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';

import {rem} from '@src/constants';
import {Space, Text, Col, Button} from '@src/modules/atoms';

export type NoResultProps = {
  icon?: JSX.Element;
  text: string;
  button?: {text: string; screen: string};
};

export default function NoResult({icon, text, button}: NoResultProps) {
  const navigation = useNavigation();
  return (
    <Wrapper>
      {icon && (
        <>
          {icon}
          <Space level={4} />
        </>
      )}
      <Text level={2} textAlign='center' preWrap lines={100}>
        {text}
      </Text>
      {button && (
        <>
          <Space level={2} />
          <Button
            title={button.text}
            onPress={() => navigation.navigate(button.screen)}
          />
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled(Col)({
  paddingVertical: rem(100),
});
