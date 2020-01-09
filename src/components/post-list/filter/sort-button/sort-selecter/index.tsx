import React, {useContext} from 'react';
import styled from 'styled-components/native';

import Space from '@src/modules/atoms/space';
import Line from '@src/modules/atoms/line';
import rem from '@src/constants/rem';
import filterContext from '@src/context/filter';
import Text from '@src/modules/atoms/text';
import colors from '@src/constants/colors';

const SORT_TYPE = ['NEW', 'HOT'];
const SORT_TEXT = {
  NEW: '최신순(기본)',
  HOT: '추천순',
};

export default function SortSelecter() {
  const filterData = useContext(filterContext);
  const {sort} = filterData.state;
  const {setSort} = filterData.action;

  return (
    <>
      <Wrapper>
        {SORT_TYPE.map((v, i) => (
          <React.Fragment key={i}>
            <SortButton
              onPress={() => {
                if (sort === v) {
                  setSort('time');
                } else {
                  setSort(v);
                }
              }}>
              <SortText selected={v === sort} level={1}>
                {SORT_TEXT[v]}
              </SortText>
            </SortButton>
            <Line />
          </React.Fragment>
        ))}
      </Wrapper>
      <Space size={rem(16)} />
    </>
  );
}

const Wrapper = styled.View({});

const SortButton = styled.TouchableOpacity({
  width: '100%',
  paddingVertical: rem(8),
});

const SortText = styled(Text)<{selected: boolean}>(props => ({
  color: props.selected ? colors.primary : colors.secondary,
  fontWeight: props.selected && 500,
}));
