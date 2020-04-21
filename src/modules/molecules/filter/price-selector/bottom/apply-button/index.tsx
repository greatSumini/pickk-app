import React from 'react';
import styled from 'styled-components/native';
import {useQuery} from 'react-apollo';
import gql from 'graphql-tag';

import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {useItemFilterContext, usePriceFilterContext} from '@src/context/filter';
import Text from '@src/modules/atoms/text';

export default function ApplyButton({setVisible}) {
  const itemFilterContext = useItemFilterContext();
  const priceFilterContext = usePriceFilterContext();
  const {itemFinalType, itemMajorType, itemMinorType} = itemFilterContext.state;
  const {minimumPrice, maximumPrice} = priceFilterContext.state;
  const {setPriceOption, setOption} = priceFilterContext.action;

  const {loading, error, data} = useQuery(GET_ITEMRANK_META, {
    variables: {
      itemFinalType,
      itemMajorType,
      itemMinorType,
      minimumPrice: (minimumPrice as any)._value,
      maximumPrice: (maximumPrice as any)._value,
    },
  });
  if (error) {
    return <Text>error</Text>;
  }
  if (loading) {
    return (
      <Wrapper>
        <Text color={colors.white}>......</Text>
      </Wrapper>
    );
  }

  const handleDrawerClose = () => {
    setPriceOption(true);
    setOption(true);
    setVisible(false);
  };

  return (
    <Wrapper>
      <Touchable onPress={handleDrawerClose}>
        <Text
          color={colors.white}
          level={1}>{`${data._getItemRankingMetadata}개의 상품 보기`}</Text>
      </Touchable>
    </Wrapper>
  );
}
const Wrapper = styled.View({
  paddingHorizontal: rem(30),
  paddingVertical: rem(8),
  backgroundColor: colors.primary,
  borderRadius: 999,
  elevation: 3,
});
const Touchable = styled.TouchableOpacity({
  flex: 1,
});

const GET_ITEMRANK_META = gql`
  query recPostMeta(
    $itemMajorType: ItemMajorType!
    $itemMinorType: ItemMinorType!
    $itemFinalType: ItemFinalType!
    $minimumPrice: Int
    $maximumPrice: Int
  ) {
    _getItemRankingMetadata(
      itemRankingOption: {
        itemMajorType: $itemMajorType
        itemMinorType: $itemMinorType
        itemFinalType: $itemFinalType
        minimumPrice: $minimumPrice
        maximumPrice: $maximumPrice
      }
    )
  }
`;
