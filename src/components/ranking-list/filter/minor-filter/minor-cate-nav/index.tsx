import React, {useContext} from 'react';
import styled from 'styled-components/native';

import ChevronLeft from '@src/assets/icons/chevron/left';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import {ItemFilterContext} from '@src/context/filter';
import {itemCateEnToKo, itemCate} from '@src/data/item';
import Text from '@src/modules/atoms/text';
import IconButton from '@src/modules/atoms/buttons/icons';

export default function MinorCateNav() {
  const itemFiltetData = useContext(ItemFilterContext);
  const {
    setItemMinorType,
    setItemMajorType,
    setItemFinalType,
  } = itemFiltetData.action;
  const {itemMinorType, itemMajorType} = itemFiltetData.state;

  const goBack = () => {
    setItemMajorType('ALL');
    setItemMinorType('ALL');
    setItemFinalType('ALL');
  };

  const handleChange = value => {
    setItemMinorType(value);
    setItemFinalType('ALL');
  };

  return (
    <Wrapper>
      <IconButton size={rem(18)} onPress={goBack} Icon={ChevronLeft} />
      <CateWrapper horizontal showsHorizontalScrollIndicator={false}>
        {getCateNames(itemMinorType, handleChange, itemCate[itemMajorType])}
      </CateWrapper>
    </Wrapper>
  );
}

const getCateNames = (minor, onChange, names: string[]) =>
  names.map((value, i) => (
    <Touchable key={i} onPress={() => onChange(value)}>
      <CateName
        level={1}
        color={value === minor ? '#333' : '#b9b9ba'}
        fontWeight={500}>
        {itemCateEnToKo[value]}
      </CateName>
    </Touchable>
  ));
const Touchable = styled.TouchableOpacity({});

const Wrapper = styled.View({
  width: '100%',
  height: rem(32),
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: rem(16),
  borderBottomWidth: rem(1),
  borderBottomColor: colors.lightGrey,
});

const CateWrapper = styled.ScrollView({});

const CateName = styled(Text)({
  width: rem(50),
  textAlign: 'center',
});
