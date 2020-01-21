import React, {useState} from 'react';
import {TouchableWithoutFeedback, Keyboard} from 'react-native';
import styled from 'styled-components/native';

import SearchScreenProps from './props';
import Header from './header';
import SearchBar from './search-bar';
import Filter from './filter';
import NavigationBar from '@src/modules/navigation/bar';
import {PostFilterContext, SortContext} from '@src/context/filter';

const items = ['포스트', '아이템', '커뮤니티'];
const CATEGORY = ['POST', 'ITEM', 'COMMUNITY'];
const DEFAULT_SORT_OPTION = {
  sort: 'DESC',
  sortBy: 'time',
};

export default function Search(props: SearchScreenProps) {
  const [text, setText] = useState('');
  const [navType, setNavType] = useState('POST');
  const [postType, setPostType] = useState('REVIEW');
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);

  const postFilterStore = {
    state: {postType},
    action: {setPostType},
  };

  const sortStore = {
    state: {
      sortOption,
    },
    action: {
      setSortOption,
    },
  };
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <Wrapper>
        <Header navigation={props.navigation} />
        <SearchBar setText={setText} />
        <NavigationBar
          items={items}
          category={CATEGORY}
          navControl={{value: navType, setValue: setNavType}}
        />
        <PostFilterContext.Provider value={postFilterStore}>
          <SortContext.Provider value={sortStore}>
            <Filter navType={navType} />
          </SortContext.Provider>
        </PostFilterContext.Provider>
      </Wrapper>
    </TouchableWithoutFeedback>
  );
}

const Wrapper = styled.SafeAreaView({
  flex: 1,
});
