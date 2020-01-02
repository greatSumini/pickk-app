import React, {useState} from 'react';
import styled from 'styled-components/native';

import Text from '@src/modules/atoms/text';
import ItemDescriptionProps from './props';
import rem from '@src/constants/rem';
import IconText from '@src/modules/molecules/icon-text';
import Heart from '@src/assets/icons/heart';
import colors from '@src/constants/colors';
import Space from '@src/modules/atoms/space';
import Star from '@src/assets/icons/star';

const IconSize = rem(12);

export default function ItemDescription({
  brandId,
  brandKor,
  brandEng,
  id,
  groupId,
  originalPrice,
  salePrice,
  imageUrl,
  purchaseUrl,
  averageScore,
  pickCount,
  itemMinorType,
  itemMajorType,
  itemFinalType,
  name,
}: ItemDescriptionProps) {
  const [heartColor, setHeartColor] = useState({
    fillIn: colors.white,
    fillOut: colors.primary,
  });
  const [like, setLike] = useState(false);

  return (
    <Wrapper>
      <ItemImg source={{uri: imageUrl}} />
      <Info>
        <InfoHead>
          <Brand>{brandKor ? brandKor : brandEng}</Brand>

          <HeartButton
            onPress={() => {
              setLike(prev => !prev);
            }}>
            <Heart
              style={{width: rem(16), height: rem(16)}}
              fillIn={like ? colors.primary : colors.white}
              fillOut={colors.primary}
            />
          </HeartButton>
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
            width={IconSize}
            height={IconSize}
            fill={colors.primary}
            level={0}>
            {averageScore}
          </IconText>
          <Space direction="ROW" level={0.5} />
          <IconText
            Icon={Heart}
            width={IconSize}
            height={IconSize}
            fill={colors.primary}
            level={0}>
            {pickCount}
          </IconText>
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

const ItemImg = styled.Image({
  width: rem(116),
  height: '100%',
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

const Brand = styled(Text)({
  color: colors.secondary,
});
const Name = styled(Text)({});
const Price = styled(Text)({color: colors.primary});
const HeartButton = styled.TouchableOpacity({});
const EnableTouch = styled.View({
  backgroundColor: 'red',
});

const PriceConatiner = (salePrice: number, originalPrice: number) => {
  if (salePrice) {
    const salePercent = 100 - (salePrice / originalPrice) * 100;
    return (
      <PriceWrapper>
        <Price level={2}>{priceHandler(salePrice)}</Price>
        <Space direction="ROW" />
        <Text
          style={{textDecorationLine: 'line-through'}}
          color={colors.secondary}>
          {priceHandler(originalPrice)}
        </Text>
        <Space direction="ROW" />
        <Text level={2} color={colors.salePercent}>{`${salePercent.toFixed(
          1,
        )}%`}</Text>
      </PriceWrapper>
    );
  } else {
    return <Price level={2}>{priceHandler(originalPrice)}</Price>;
  }
};

const priceHandler = (price: number) => {
  if (price % 1000 === 0) {
    return `${(price / 1000).toFixed(0)},000`;
  } else {
    return `${(price / 1000).toFixed(0)},${price % 1000}`;
  }
};
