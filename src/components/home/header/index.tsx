import React from 'react';
import styled from 'styled-components/native';

import IconButton from '@src/modules/atoms/buttons/icons';
import HamburgetIcon from '@src/assets/icons/hamburger';
import SearchIcon from '@src/assets/icons/search';
import colors from '@src/constants/colors';

import {useQuery} from '@apollo/react-hooks';
import {GET_USER_INFO} from '@src/apollo/state/queries/User';
import {logout} from '@src/controllers/User';

export type HomeHeaderProps = {
  toggleDrawer: () => void;
  routeToSearch: () => void;
};

export default function HomeHeader({
  toggleDrawer,
  routeToSearch,
}: HomeHeaderProps) {
  return (
    <Wrapper>
      <IconButton
        onPress={logout}
        Icon={HamburgetIcon}
        size={24}
        fill={colors.white}
      />
      <IconButton
        onPress={routeToSearch}
        Icon={SearchIcon}
        size={24}
        fill={colors.white}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0,
  zIndex: 100,
  width: '100%',
  paddingVertical: 16,
  paddingHorizontal: 20,
});
