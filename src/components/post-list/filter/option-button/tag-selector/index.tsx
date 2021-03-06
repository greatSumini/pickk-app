import React from 'react';
import styled from 'styled-components/native';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useFilterContext} from '@src/context/filter';
import {tagList, tagEnToKo} from '@src/data/post/tag';
import Space from '@src/modules/atoms/space';
import Text from '@src/modules/atoms/text';

export default function TagSelector() {
  const filterContext = useFilterContext();
  const {tag} = filterContext.state;
  const {setTag} = filterContext.action;

  return (
    <>
      <Wrapper>
        {tagList.map((item, index) => (
          <React.Fragment key={index}>
            <TagButton {...{tag, setTag, item}} />
            <Space direction="ROW" />
          </React.Fragment>
        ))}
      </Wrapper>
      <Space size={rem(16)} />
    </>
  );
}

function TagButton({tag, item, setTag}) {
  return (
    <Touchable
      selected={tag === item}
      onPress={() => {
        setTag(tag === item ? null : item);
      }}>
      <Text color={tag === item ? colors.white : colors.secondary} level={1}>
        {'#' + tagEnToKo[item]}
      </Text>
    </Touchable>
  );
}

const Wrapper = styled.View({
  flexDirection: 'row',
});

const Touchable = styled.TouchableOpacity<{selected: boolean}>(props => ({
  paddingVertical: rem(2),
  paddingHorizontal: rem(8),
  borderRadius: 9999,
  borderWidth: 1,
  borderColor: props.selected ? colors.primary : colors.lightGrey,
  backgroundColor: props.selected ? colors.primary : colors.white,
}));
