import React from 'react';
import styled from 'styled-components/native';

import PostCardWideItemRowProps from './props';
import Text from '@src/modules/atoms/text';
import rem from '@src/constants/rem';
import colors from '@src/constants/colors';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';

export default function PostCardWideItemRow({
  simpleItemList: itemList,
}: PostCardWideItemRowProps) {
  return (
    <Wrapper onStartShouldSetResponder={() => true}>
      <ItemRow horizontal>
        {itemList &&
          itemList.map((item, index) => (
            <CardItem
              key={index}
              brandKor={item.brandKor}
              imageUrl={item.imageUrl}
            />
          ))}
      </ItemRow>
    </Wrapper>
  );
}

const CardItem = ({brandKor, imageUrl}) => {
  return (
    <ItemInfo>
      <ItemImg source={{uri: addSizeToImagePath(imageUrl, ImageSize.Small)}} />
      <ItemNameWrapper>
        <ItemName level={1} ellipsis>
          {brandKor}
        </ItemName>
      </ItemNameWrapper>
    </ItemInfo>
  );
};

const Wrapper = styled.View({
  width: '100%',
  height: rem(93),
});

const ItemRow = styled.ScrollView({
  paddingRight: rem(16),
  paddingTop: rem(7),
});
const ItemInfo = styled.View({
  marginLeft: rem(16),
});
const ItemImg = styled.Image({
  width: rem(56),
  height: rem(56),
  borderRadius: rem(28),
});
const ItemName = styled(Text)({
  marginTop: rem(4),
  color: colors.primary,
  textAlign: 'center',
});

const ItemNameWrapper = styled.View({
  width: rem(56),
});
