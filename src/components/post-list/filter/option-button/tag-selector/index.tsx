import React, {useContext} from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import FilterContext from '@src/context/filter';
import {tagList, tagEnToKo} from '@src/data/post/tag';
import Space from '@src/modules/atoms/space';
import Text from '@src/modules/atoms/text';

export default function TagSelector() {
  const filterData = useContext(FilterContext);
  const {tag} = filterData.state;
  const {setTag} = filterData.action;

  return (
    <>
      <Wrapper>
        {tagList.map((v, i) => (
          <React.Fragment key={i}>
            <TagButton
              selected={tag === v}
              onPress={() => {
                if (tag === v) {
                  setTag(undefined);
                } else {
                  setTag(v);
                }
              }}>
              <Text
                color={tag === v ? colors.white : colors.secondary}
                level={1}>
                {'#' + tagEnToKo[v]}
              </Text>
            </TagButton>
            <Space direction="ROW" />
          </React.Fragment>
        ))}
      </Wrapper>
      <Space size={rem(16)} />
    </>
  );
}

const Wrapper = styled.View({
  flexDirection: 'row',
});

const TagButton = styled.TouchableOpacity<{selected: boolean}>(props => ({
  paddingVertical: rem(2),
  paddingHorizontal: rem(8),
  borderRadius: 9999,
  borderWidth: 1,
  borderColor: props.selected ? colors.primary : colors.lightGrey,
  backgroundColor: props.selected ? colors.primary : colors.white,
}));
