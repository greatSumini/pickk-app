import React from 'react';
import styled from 'styled-components/native';

import RotateIcon from '@src/assets/icons/rotate';
import {SIZE, DIM, MAX_PRICE, MIN_PRICE} from '@src/components/ranking-list';
import rem from '@src/constants/rem';
import {useRankFilterDrawerContext} from '@src/context/filter';
import IconText from '@src/modules/molecules/icon-text';

const ICON_SIZE = rem(12);

export default function ResetButton() {
  const rankFilterDrawerContext = useRankFilterDrawerContext();
  const {minPrice, maxPrice} = rankFilterDrawerContext.state;
  const {
    setMaxState,
    setMinState,
    setPriceOption,
  } = rankFilterDrawerContext.action;

  const initPriceOption = () => {
    maxPrice.setValue(MAX_PRICE);
    minPrice.setValue(MIN_PRICE);
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
        content="가격 재설정"
        space={rem(4)}
      />
    </Touchable>
  );
}

const Touchable = styled.TouchableOpacity({});
