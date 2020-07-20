import React from 'react';
import RNPPickerSelect, {PickerSelectProps} from 'react-native-picker-select';
import {TextStyle} from 'react-native';

export type PickerProps = Omit<
  PickerSelectProps,
  'onValueChange' | 'style' | 'pickerProps'
> & {
  onChange: (value: any) => void;
  style: TextStyle;
  pickerProps?: any;
};

export default function Picker({
  value,
  onChange,
  items,
  placeholder,
  disabled,
  style,
  children,
  pickerProps,
}: PickerProps) {
  const pickerSelectStyle = {
    inputIOS: style,
    inputAndroid: style,
  };

  return (
    <RNPPickerSelect
      onValueChange={onChange}
      {...{
        value,
        items,
        placeholder,
        disabled,
        style: pickerSelectStyle,
        children,
        pickerProps,
      }}>
      {children}
    </RNPPickerSelect>
  );
}
