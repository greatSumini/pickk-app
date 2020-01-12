import React from 'react';
import styled from 'styled-components/native';

import Space from '@src/modules/atoms/space';
import Line from '@src/modules/atoms/line';
import rem from '@src/constants/rem';
import {useFilterContext} from '@src/context/filter';
import Text from '@src/modules/atoms/text';
import colors from '@src/constants/colors';

const SORT_TYPE = ['NEW', 'HOT'];
const SORT_TEXT = {
  NEW: '최신순(기본)',
  HOT: '추천순',
};

export default function SortSelecter() {
  const filterContext = useFilterContext();
  const {sort} = filterContext.state;
  const {setSort} = filterContext.action;

  return (
    <>
      <Wrapper>
        {SORT_TYPE.map((item, index) => (
          <React.Fragment key={index}>
            <SortButton {...{sort, item, setSort}} />
            <Line />
          </React.Fragment>
        ))}
      </Wrapper>
      <Space size={rem(16)} />
    </>
  );
}

function SortButton({sort, item, setSort}) {
  return (
    <Touchable
      onPress={() => {
        setSort(sort === item ? null : item);
      }}>
      <SortText selected={item === sort} level={1}>
        {SORT_TEXT[item]}
      </SortText>
    </Touchable>
  );
}

const Wrapper = styled.View({});

const Touchable = styled.TouchableOpacity({
  width: '100%',
  paddingVertical: rem(8),
});

const SortText = styled(Text)<{selected: boolean}>(props => ({
  color: props.selected ? colors.primary : colors.secondary,
  fontWeight: props.selected && 500,
}));
