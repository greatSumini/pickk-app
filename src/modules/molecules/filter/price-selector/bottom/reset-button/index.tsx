import React from 'react';
import styled from 'styled-components/native';

import RotateIcon from '@src/assets/icons/rotate';
import {SIZE, DIM, MAX_PRICE, MIN_PRICE} from '../..';
import rem from '@src/constants/rem';
import {usePriceFilterContext} from '@src/context/filter';
import IconText from '@src/modules/molecules/icon-text';

const ICON_SIZE = rem(12);

export default function ResetButton() {
  const priceFilterContext = usePriceFilterContext();
  const {minimumPrice, maximumPrice} = priceFilterContext.state;
  const {setMaxState, setMinState, setPriceOption} = priceFilterContext.action;

  const initPriceOption = () => {
    maximumPrice.setValue(MAX_PRICE);
    minimumPrice.setValue(MIN_PRICE);
    setMaxState(SIZE - DIM);
    setMinState(0);
    setPriceOption(false);
  };

  return (
    <Touchable onPress={initPriceOption}>
      <IconText
        Icon={RotateIcon}
        width={ICON_SIZE}
        height={ICON_SIZE}
        level={1}
        content='가격 재설정'
        space={rem(4)}
      />
    </Touchable>
  );
}

const Touchable = styled.TouchableOpacity({});
