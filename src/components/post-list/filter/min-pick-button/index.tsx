import React, {useContext} from 'react';

import ThumsUpIcon from '@src/assets/icons/thums-up';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import FilterContext from '@src/context/filter';
import Space from '@src/modules/atoms/space';
import Text from '@src/modules/atoms/text';
import IconText from '@src/modules/molecules/icon-text';
import {FilterItem} from '../option-button';

export default function MinPickButton() {
  const filterData = useContext(FilterContext);
  const {pick} = filterData.state;
  const {setPick} = filterData.action;

  const recommedBackColor = pick === 0 ? colors.white : colors.primary;
  const recommendColor = pick === 0 ? colors.primary : colors.white;
  const onOffText = pick === 0 ? 'OFF' : 'ON';

  const minPickHandler = () => {
    if (pick === 0) {
      setPick(10);
    } else {
      setPick(0);
    }
  };

  return (
    <FilterItem
      onPress={minPickHandler}
      style={{
        backgroundColor: recommedBackColor,
      }}>
      <IconText
        Icon={ThumsUpIcon}
        width={rem(12)}
        height={rem(12)}
        content="10추글"
        fillOut={recommendColor}
        fillLeft={recommedBackColor}
        fillRight={recommedBackColor}
        textColor={recommendColor}
        level={0}
      />
      <Space direction="ROW" />
      <Text color={recommendColor}>{onOffText}</Text>
    </FilterItem>
  );
}
