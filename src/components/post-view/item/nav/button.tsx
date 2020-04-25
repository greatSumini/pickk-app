import React from 'react';
import styled from 'styled-components/native';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import Image from '@src/modules/atoms/img';
import {ItemInfo} from '@src/modules/types/ItemInfo';
import Text from '@src/modules/atoms/text';
import rem from '@src/constants/rem';
import {WHITE, BLACK} from '@src/constants/colors';
import Space from '@src/modules/atoms/space';

export type ItemNavButtonProps = Pick<
  ItemInfo,
  'brandKor' | 'imageUrl' | 'originalPrice' | 'salePrice'
> & {
  selected: boolean;
  onClick: () => void;
};

function ItemNavButton({
  brandKor,
  imageUrl,
  originalPrice,
  salePrice,
  selected,
  onClick,
}: ItemNavButtonProps) {
  return (
    <Touchable selected={selected} onPress={onClick}>
      <ImageWrapper selected={selected}>
        <Image
          source={{uri: imageUrl}}
          style={{
            width: rem(56),
            height: rem(56),
          }}
          circle
          border
          resizeMode='stretch'
        />
      </ImageWrapper>
      <Text level={1} fontWeight='medium'>
        {brandKor}
      </Text>
      <Text fontWeight='bold' style={{alignItems: 'flex-end'}}>
        <Text level={-1} color={'#d95050'}>
          {((1 - Number(salePrice) / Number(originalPrice)) * 100).toFixed(0)}%
        </Text>
        <Space direction='ROW' size={2} />
        {originalPrice}
      </Text>
    </Touchable>
  );
}

export default React.memo(
  ItemNavButton,
  (prev, next) => prev.selected === next.selected,
);

const Touchable = styled(TouchableCmp)<{selected: boolean}>((props) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginRight: rem(16),
    paddingBottom: rem(4),
    borderBottomWidth: rem(2),
    borderBottomColor: props.selected ? BLACK : WHITE,
  };
});

const ImageWrapper = styled.View<{selected: boolean}>((props) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: rem(4),
    borderColor: props.selected ? BLACK : WHITE,
    borderWidth: rem(2),
    borderRadius: 9999,
    marginBottom: rem(3),
  };
});
