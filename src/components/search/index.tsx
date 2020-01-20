import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import styled from 'styled-components/native';

import SearchScreenProps from './props';
import Header from './header';
import SearchBar from './search-bar';
import Filter from './filter';

const items = ['포스트', '아이템', '커뮤니티'];
const CATEGORY = ['POST', 'ITEM', 'COMMUNITY'];

export default function Search(props: SearchScreenProps) {
  const [text, setText] = useState(null);
  const [navType, setNavType] = useState('POST');

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Wrapper>
        <Header navigation={props.navigation} />
        <SearchBar setText={setText} />
        <Filter navType={navType} />
      </Wrapper>
    </TouchableWithoutFeedback>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
});
