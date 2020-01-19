import React from 'react';
import SwitchSelector from 'react-native-switch-selector';

import {usePostFilterContext} from '@src/context/filter';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';

const options = [
  {
    label: '리뷰',
    value: 'REVIEW',
  },
  {
    label: 'LOOK',
    value: 'LOOK',
  },
];

export default function PostTypeSwitch() {
  const postFilterContext = usePostFilterContext();
  const {setPostType} = postFilterContext.action;

  return (
    <SwitchSelector
      options={options}
      initial={0}
      onPress={value => {
        console.log('switch selected');
        setPostType(value);
      }}
      style={{
        width: rem(96),
        borderWidth: 1,
        borderRadius: 999,
        borderColor: colors.lightGrey,
      }}
      height={rem(24)}
      fontSize={rem(10)}
      buttonColor={colors.primary}
      selectedTextContainerStyle={{
        borderWidth: 1,
        borderRadius: 999,
        borderColor: colors.lightGrey,
      }}
    />
  );
}
