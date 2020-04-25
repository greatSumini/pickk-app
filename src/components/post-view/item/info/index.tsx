import React from 'react';
import styled from 'styled-components/native';

import rem from '@src/constants/rem';
import {ItemInfo as ItemInfoType} from '@src/modules/types/ItemInfo';
import Image from '@src/modules/atoms/img';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import {MIDDLE_GREY, BLACK, WHITE} from '@src/constants/colors';
import StarIcon from '@src/assets/icons/star';
import HeartIcon from '@src/assets/icons/heart';
import URLButton from '@src/modules/molecules/button/url';

export type ItemInfoProps = Pick<
  ItemInfoType,
  | 'brandKor'
  | 'name'
  | 'imageUrl'
  | 'originalPrice'
  | 'salePrice'
  | 'averageScore'
  | 'pickCount'
  | 'purchaseUrl'
>;

function ItemInfo({
  brandKor,
  name,
  imageUrl,
  originalPrice,
  salePrice,
  averageScore,
  pickCount,
  purchaseUrl,
}: ItemInfoProps) {
  const iconStyle = {width: rem(12), height: rem(12), marginRight: rem(4)};

  return (
    <>
      <Wrapper>
        <Image
          style={{width: rem(112), height: '100%', marginRight: rem(12)}}
          source={{uri: imageUrl}}
        />
        <Col>
          <Text level={1} fontWeight='medium'>
            {brandKor}
          </Text>
          <Space level={2} />
          <Text level={2} color={MIDDLE_GREY} lines={2} style={{width: '100%'}}>
            {name}
          </Text>
          <Space size={8} />
          <Text level={3} fontWeight='bold' style={{alignItems: 'flex-end'}}>
            {originalPrice}{' '}
            <Text level={1} fontWeight='medium' color={MIDDLE_GREY}>
              {salePrice}
            </Text>{' '}
            <Text level={3} fontWeight='bold' color='#d95050'>
              {((1 - Number(salePrice) / Number(originalPrice)) * 100).toFixed(
                0,
              )}
              %
            </Text>
          </Text>
          <Space level={2} />
          <Text fontWeight='medium'>
            <StarIcon style={iconStyle} fill={BLACK} />
            {averageScore.toFixed(1)}
            <Space direction='ROW' size={8} />
            <HeartIcon style={iconStyle} fillIn={BLACK} fillOut={BLACK} />
            {pickCount}
          </Text>
        </Col>
      </Wrapper>
      <URLButton
        url={purchaseUrl}
        style={{
          width: rem(328),
          backgroundColor: BLACK,
          paddingVertical: rem(10),
          marginHorizontal: rem(16),
          borderRadius: 9999,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text level={2} fontWeight='medium' color={WHITE}>
          아이템 보러가기
        </Text>
      </URLButton>
    </>
  );
}

export default React.memo(ItemInfo);

const Wrapper = styled.View({
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  paddingVertical: rem(12),
  paddingHorizontal: rem(16),
  height: rem(164),
});

const Col = styled.View({
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  flex: 1,
});
