import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import axios from 'axios';

import {ListProps} from './list-props';

import {Text} from '../atoms';
import {MIDDLE_GREY} from '@src/constants/colors';
import {View, RefreshControl} from 'react-native';

const ITEMS_PER_PAGE = 20;

export type ScrollListProps = ListProps & {deps?: any[]};

const ScrollList = ({
  requestConfig,
  ListItem,
  filter,
  initialData,
  Skeleton,
  NoResult,
  listFilter,
  deps = [],
  listItemProp,
  loading = false,
  setLoading = () => {},
  style,
  onScroll,
}: ScrollListProps) => {
  const [page, setPage] = useState(0);
  const [fetching, setFetching] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(initialData || []);

  const getData = async () => {
    setFetching(true);
    const {data: fetchedData} = await axios(
      requestConfig({
        offset: page * ITEMS_PER_PAGE,
        limit: ITEMS_PER_PAGE,
        ...filter,
      }),
    );
    const results = fetchedData?.results?.filter(
      listFilter ? listFilter : () => true,
    );
    setData(page === 0 ? results : [...data, ...results]);
    setFetching(false);
    setRefreshing(false);
    setLoading(false);
  };

  const loadMore = () => {
    if (fetching) {
      return;
    }
    setPage(page + 1);
  };

  const refresh = async () => {
    setRefreshing(true);
    setPage(0);
    if (page === 0) {
      getData();
    }
  };

  useEffect(() => {
    getData();
  }, [page]);

  useEffect(() => {
    refresh();
  }, deps);

  const LoadingComponent = Skeleton || (() => <Text>loading...</Text>);
  const EmptyComponent = NoResult || (() => <></>);

  return (
    <Wrapper style={style}>
      <View style={{flex: 1}}>
        <FlatList
          keyExtractor={(item) => JSON.stringify(item)}
          data={data}
          onScroll={onScroll}
          renderItem={({item}) => <ListItem {...item} {...listItemProp} />}
          onEndReached={loadMore}
          onEndReachedThreshold={1}
          ListEmptyComponent={
            loading || fetching ? LoadingComponent : EmptyComponent
          }
          ListFooterComponent={fetching ? LoadingComponent : null}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={refresh} />
          }
        />
      </View>
    </Wrapper>
  );
};

const Wrapper = styled.View`
  width: 100%;
  text-align: center;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
  flex: 1;
`;

export const LoadMoreButton = styled.TouchableNativeFeedback`
  width: fit-content;
  padding: 0.04rem 0.08rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${MIDDLE_GREY};
  border-radius: 9999px;
  margin-top: 0.08rem;
`;

export default ScrollList;
