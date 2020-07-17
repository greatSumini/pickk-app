import React from 'react';
import {StyleProp, TextStyle} from 'react-native';
import {Picker as _Picker} from '@react-native-community/picker';

const {Item} = _Picker;

export type PickerProps = {
  value: any;
  onChange: (value: any, index?: number) => void;
  style?: StyleProp<TextStyle>;
  itemStyle?: StyleProp<TextStyle>;
  enabled?: boolean;
  mode?: 'dialog' | 'dropdown';
  prompt?: string;
};

export default function Picker({
  value,
  onChange,
  style,
  itemStyle,
  enabled,
  mode,
  prompt,
}: PickerProps) {
  return (
    <_Picker
      selectedValue={value}
      onValueChange={onChange}
      {...{style, itemStyle, enabled, mode, prompt}}
    />
  );
}

export const PickerItem = Item;
