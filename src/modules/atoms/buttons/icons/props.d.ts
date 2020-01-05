import React from 'react';

type IconButtonProps = {
  onPress: () => void;
  size: number;
  Icon: React.ElementType;
  fill?: string;
  fillIn?: string;
  fillOut?: string;
  fillLeft?: string;
  fillRight?: string;
};

export default IconButtonProps;
