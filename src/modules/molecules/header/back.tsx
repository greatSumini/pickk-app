import * as React from 'react';
import styled from 'styled-components';

import ArrowLeftIcon from '@src/assets/icons/arrow/left';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import LogoIcon from '@src/assets/icons/logo';
import {Text} from '@src/modules/atoms';
import {BLACK} from '@src/constants';

type IProps = {
  title?: string;
  cartVisible?: boolean;
  backIconColor?: string;
};

export const BackHeader: React.FunctionComponent<IProps> = ({
  title,
  cartVisible,
  backIconColor = BLACK,
}: IProps) => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ArrowLeftIcon
          style={{width: '0.2rem', height: '0.2rem'}}
          fill={backIconColor}
        />
      </View>
      {title && (
        <Text level={3} color={BLACK} fontWeight='medium'>
          {title}
        </Text>
      )}
      {!title && (
        <View>
          <LogoIcon style={{width: '0.32rem', height: '0.2rem'}} />
        </View>
      )}

      <View style={{width: '0.2rem', height: '0.2rem'}}></View>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: 0.44rem;
  padding: 0 0.16rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
