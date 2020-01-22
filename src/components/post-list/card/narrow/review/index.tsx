import React from 'react';
import styled from 'styled-components/native';

import ThumsUp from '@src/assets/icons/thums-up';
import View from '@src/assets/icons/view';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import IconText from '@src/modules/molecules/icon-text';
import {parseTime} from '@src/lib/utils/time-parser';
import {imageUriHandler} from '@src/lib/utils/url-parser';
import {ImageSize} from '@src/lib/utils/image-size-parser';
import postCardNarrowReviewProps from './props';

const ICON_SIZE = rem(9);

export default function NarrowReviewCard({
  title,
  name,
  time,
  viewCount,
  pickCount,
  titleType,
  titleImageUrl,
  titleYoutubeUrl,
}: postCardNarrowReviewProps) {
  return (
    <Touchable>
      <Wrapper>
        <ItemInfo>
          <Title lines={2} level={1} color={colors.primary}>
            {title}
          </Title>
          <SubInfo>
            <Row>
              <Name color={colors.secondary}>{name}</Name>
              <Space direction='ROW' size={8} />
              <Time color={colors.secondary}>{parseTime(time)}</Time>
            </Row>
            <Row>
              <IconText
                Icon={ThumsUp}
                width={ICON_SIZE}
                height={ICON_SIZE}
                fillOut={colors.secondary}
                fillLeft={colors.white}
                fillRight={colors.secondary}
                textColor={colors.secondary}
                content={pickCount}
              />
              <Space direction='ROW' size={7} />
              <IconText
                Icon={View}
                width={ICON_SIZE}
                height={ICON_SIZE}
                fill={colors.secondary}
                fillIn={colors.white}
                textColor={colors.secondary}
                content={viewCount}
              />
            </Row>
          </SubInfo>
        </ItemInfo>
        <ItemImg
          source={{
            uri: imageUriHandler(
              titleType,
              titleImageUrl,
              titleYoutubeUrl,
              ImageSize.Small,
            ),
          }}
        />
      </Wrapper>
    </Touchable>
  );
}

const Touchable = styled(TouchableCmp)({
  width: '100%',
  height: rem(76),
});

const Wrapper = styled.View({
  width: '100%',
  height: rem(76),
  paddingHorizontal: rem(16),
  paddingVertical: rem(8),
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottomWidth: 1,
  borderBottomColor: colors.lightGrey,
});

const ItemInfo = styled.View({
  justifyContent: 'space-between',
});

const ItemImg = styled.Image({
  width: rem(60),
  height: rem(60),
});

const SubInfo = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Row = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});

const Title = styled(Text)({
  width: rem(248),
});
const Name = styled(Text)({
  width: rem(63),
});
const Time = styled(Text)({});
