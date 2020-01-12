import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useFilterContext} from '@src/context/filter';
import Text from '@src/modules/atoms/text';

type ApplyButtonProps = {
  buttonText: string;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ApplyButton({
  buttonText,
  setVisible,
}: ApplyButtonProps) {
  const filterData = useFilterContext();
  const {tag, sort} = filterData.state;
  const {setOption, setSortOption} = filterData.action;

  const applyHandler = () => {
    setOption(tag !== null);
    setSortOption(sort !== null);
    setVisible(false);
  };

  return (
    <ApplyWrpper onPress={applyHandler}>
      <Text color={colors.white} level={2}>
        {buttonText}
      </Text>
    </ApplyWrpper>
  );
}
const ApplyWrpper = styled.TouchableOpacity({
  width: rem(304),
  height: rem(40),
  backgroundColor: colors.primary,
  alignSelf: 'center',
  alignItems: 'center',
  justifyContent: 'center',
});
