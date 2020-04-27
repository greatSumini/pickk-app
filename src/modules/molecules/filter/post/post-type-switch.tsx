import React from 'react';
import SwitchSelector from 'react-native-switch-selector';

import {rem, colors} from '@src/constants';
import {usePostFilterContext} from '@src/context/filter';

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

export default function PostTypeSwitchSelector() {
  const postFilterContext = usePostFilterContext();
  const {setPostType} = postFilterContext.action;

  return (
    <SwitchSelector
      options={options}
      initial={0}
      onPress={(value) => {
        setPostType(value);
      }}
      style={{
        width: rem(96),
        height: rem(24),
        borderWidth: 1,
        borderRadius: 999,
        borderColor: colors.lightGrey,
      }}
      height={rem(24)}
      fontSize={rem(10)}
      buttonColor={colors.primary}
      selectedTextContainerStyle={{
        borderWidth: 1,
        height: rem(24),
        borderRadius: 999,
        borderColor: colors.lightGrey,
      }}
    />
  );
}
