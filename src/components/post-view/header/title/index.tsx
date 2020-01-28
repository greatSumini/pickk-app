import React, {useState} from 'react';
import styled from 'styled-components/native';

import HeaderTitleProps from './props';
import ChevronDown from '@src/assets/icons/chevron/down';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import IconButton from '@src/modules/atoms/buttons/icons';
import {stringifyPassedTime} from '@src/lib/utils/time-parser';

export default function HeaderTitle({
  title,
  viewCount,
  time,
  content,
}: HeaderTitleProps) {
  const [visible, setVisible] = useState(false);

  return (
    <Wrapper>
      <Row style={{marginBottom: rem(2), justifyContent: 'space-between'}}>
        <Text level={2}>{title}</Text>
        {content.length > 1 && (
          <IconButton
            Icon={ChevronDown}
            size={rem(16)}
            fill={colors.primary}
            onPress={() => {
              setVisible(prev => !prev);
            }}
          />
        )}
      </Row>
      {visible && (
        <DescWrapper>
          <Text lines={10} level={1} color={colors.secondary}>
            {content}
          </Text>
        </DescWrapper>
      )}
      <Row>
        <Text color={colors.secondary}>{`조회수 ${viewCount}회`}</Text>
        <Space direction='ROW' size={7} />
        <Text color={colors.secondary}>{`${stringifyPassedTime(time)}`}</Text>
      </Row>
    </Wrapper>
  );
}
const Wrapper = styled.View({
  width: '100%',
  minHeight: rem(56),
  paddingHorizontal: rem(16),
  paddingTop: rem(7),
  paddingBottom: rem(12),
});

const Row = styled.View({
  flexDirection: 'row',
  alignItems: 'center',
});

const DescWrapper = styled.View({
  marginVertical: rem(10),
});
