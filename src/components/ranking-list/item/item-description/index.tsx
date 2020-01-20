import React, {useState} from 'react';
import styled from 'styled-components/native';

import Heart from '@src/assets/icons/heart';
import Star from '@src/assets/icons/star';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {addCommaToNumber} from '@src/lib/utils/price-parser';
import {addSizeToImagePath, ImageSize} from '@src/lib/utils/image-size-parser';
import IconButton from '@src/modules/atoms/buttons/icons/index';
import Image from '@src/modules/atoms/img';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import IconText from '@src/modules/molecules/icon-text';
import ItemDescriptionProps from './props';

const ICON_SIZE = rem(12);

export default function ItemDescription({
  brandKor,
  brandEng,
  originalPrice,
  salePrice,
  imageUrl,
  averageScore,
  pickCount,
  name,
  brandId,
  id,
  groupId,
  purchaseUrl,
  itemMinorType,
  itemMajorType,
  itemFinalType,
}: ItemDescriptionProps) {
  const [like, setLike] = useState(false);

  return (
    <Wrapper>
      <Image
        imgWidth={rem(116)}
        source={{uri: addSizeToImagePath(imageUrl, ImageSize.Medium)}}
      />
      <Info>
        <InfoHead>
          <Brand color={colors.secondary}>
            {brandKor ? brandKor : brandEng}
          </Brand>
          <IconButton
            Icon={Heart}
            onPress={() => {
              setLike(prev => !prev);
            }}
            size={rem(16)}
            fillIn={like ? colors.primary : colors.white}
            fillOut={colors.primary}
          />
        </InfoHead>
        <Space direction="COL" level={5.25} />
        <InfoMain>
          <Name>{name}</Name>
          {PriceConatiner(salePrice, originalPrice)}
        </InfoMain>
        <Space direction="COL" level={3.5} />
        <InfoFoot>
          <IconText
            Icon={Star}
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={colors.primary}
            level={0}
            content={averageScore}
          />
          <Space direction="ROW" level={0.5} />
          <IconText
            Icon={Heart}
            width={ICON_SIZE}
            height={ICON_SIZE}
            fill={colors.primary}
            level={0}
            content={pickCount}
          />
        </InfoFoot>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: rem(336),
  height: rem(142),
  flexDirection: 'row',
});

const Info = styled.View({
  width: rem(220),
  height: '100%',
  paddingLeft: rem(8),
});

const InfoHead = styled.View({
  flexDirection: 'row',
  justifyContent: 'space-between',
});
const InfoMain = styled.View({});
const InfoFoot = styled.View({
  flexDirection: 'row',
});
const PriceWrapper = styled.View({
  flexDirection: 'row',
  alignItems: 'flex-end',
});

const Brand = styled(Text)({});
const Name = styled(Text)({});

const PriceConatiner = (salePrice: number, originalPrice: number) => {
  const salePercent = (100 - (salePrice / originalPrice) * 100).toFixed(1);

  return (
    <PriceWrapper>
      <Text level={2} color={colors.primary}>
        {addCommaToNumber(salePrice ? salePrice : originalPrice)}
      </Text>
      {salePrice && (
        <>
          <Space direction="ROW" />
          <Text
            style={{textDecorationLine: 'line-through'}}
            color={colors.secondary}>
            {addCommaToNumber(originalPrice)}
          </Text>
          <Space direction="ROW" />
          <Text level={2} color={colors.salePercent}>
            {salePercent + '%'}
          </Text>
        </>
      )}
    </PriceWrapper>
  );
};
