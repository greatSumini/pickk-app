import React, {useState} from 'react';
import {TextInput, Keyboard} from 'react-native';
import styled from 'styled-components/native';

import SearchIcon from '@src/assets/icons/search';
import colors from '@src/constants/colors';
import rem from '@src/constants/rem';
import IconButton from '@src/modules/atoms/buttons/icons';

type SearchBarProp = {
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchBar({setText}: SearchBarProp) {
  const [value, setValue] = useState(null);

  const handleSubmit = () => {
    setText(value);
    setValue('');
    Keyboard.dismiss();
  };

  return (
    <Wrapper>
      <TextInputWrapper>
        <TextInput
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleSubmit}
          style={{width: rem(270)}}
        />
        <IconButton
          Icon={SearchIcon}
          size={rem(16)}
          fill={colors.primary}
          onPress={handleSubmit}
        />
      </TextInputWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: '100%',
  height: rem(70),
  paddingHorizontal: rem(20),
  justifyContent: 'center',
  backgroundColor: colors.lightGrey,
});

const TextInputWrapper = styled.View({
  width: '100%',
  height: rem(38),
  paddingHorizontal: rem(16),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: colors.white,
  elevation: 6,
});
