import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native';

import Header from './header';
import Filter from './filter';
import Item from './item';
import ChannelScreenProps from './props';
import {PostFilterContext, SortContext} from '@src/context/filter';
import PostListCardWide from '@src/components/post-list/card/wide';
import PostListCardNarrowLook from '@src/components/post-list/card/narrow/look';
import ScrollList from '@src/modules/list/scroll';
import NavigationBar from '@src/modules/navigation/bar';
import {useRoute, RouteProp} from '@react-navigation/native';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app.d.ts';

const items = ['포스트', '아이템'];

const DEFAULT_SORT_OPTION = {
  sort: 'DESC',
  sortBy: 'time',
};

const CATEGORY = ['POST', 'ITEM'];

export default function Channel(props: ChannelScreenProps) {
  const route = useRoute<RouteProp<AppStackParams, 'Channel'>>();
  const [navType, setNavType] = useState<'POST' | 'ITEM'>('POST');
  const [postType, setPostType] = useState<'REVIEW' | 'LOOK'>('REVIEW');
  const [sortOption, setSortOption] = useState(DEFAULT_SORT_OPTION);

  const {id} = route.params;

  useEffect(() => {
    setSortOption(DEFAULT_SORT_OPTION);
    setPostType('REVIEW');
  }, [navType]);

  const postTypeStore = {
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

  const querySelector = () => {
    return null;
  };

  const categorySelector = () => {
    if (navType === 'POST') {
      return 'allRecommendPosts';
    } else {
      return 'allItemReviews';
    }
  };

  const listItemSelector = () => {
    if (navType === 'POST') {
      if (postType === 'REVIEW') {
        return PostListCardWide;
      } else {
        return PostListCardNarrowLook;
      }
    } else {
      return Item;
    }
  };

  const filterSelector = () => {
    if (navType === 'POST') {
      return {
        postType,
      };
    }
  };

  return (
    <Wrapper>
      <PostFilterContext.Provider value={postTypeStore}>
        <SortContext.Provider value={sortStore}>
          <ScrollList
            ListHeader={
              <ListHeader
                id={id}
                navType={navType}
                setNavType={setNavType}
                navigation={props.navigation}
              />
            }
            query={querySelector()}
            category={categorySelector()}
            ListItem={listItemSelector()}
            filter={{
              id,
              sort: sortOption.sort,
              sortBy: sortOption.sortBy,
              ...filterSelector(),
            }}
          />
        </SortContext.Provider>
      </PostFilterContext.Provider>
    </Wrapper>
  );
}

function ListHeader({id, navigation, navType, setNavType}) {
  return (
    <>
      <Header id={id} navigation={navigation} />
      <NavigationBar
        items={items}
        navControl={{value: navType, setValue: setNavType}}
        category={CATEGORY}
      />
      <Filter navType={navType} id={id} />
    </>
  );
}

const Wrapper = styled.SafeAreaView({flex: 1});
