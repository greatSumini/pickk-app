import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';

import {BLACK} from '@src/constants/colors';
import rem from '@src/constants/rem';
import Text from '../atoms/text';

type IProps = {
  style?: StyleProp<ViewStyle>;
  category: string;
  // tslint:disable-next-line: no-any
  filter?: any;
  // tslint:disable-next-line: no-any
  query: any;
  // tslint:disable-next-line: no-any
  onScroll: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
  ListItem: React.FunctionComponent<any>;
  Skeleton?: React.FunctionComponent;
  numColumns?: number;
  headerMaxHeight?: number;
};

const ITEMS_PER_PAGE = 20;

export default function ScrollList({
  style,
  category,
  filter,
  query,
  ListItem,
  Skeleton,
  onScroll,
  numColumns = 1,
  headerMaxHeight = 0,
}: IProps) {
  const propName = category;

  const {networkStatus, loading, error, data, refetch, fetchMore} = useQuery(
    query,
    {
      variables: {
        start: 0,
        first: ITEMS_PER_PAGE,
        ...filter,
      },
      notifyOnNetworkStatusChange: true,
    },
  );

  if (networkStatus === 1) {
    return Skeleton ? (
      <Skeleton />
    ) : (
      <ActivityIndicator
        size={35}
        color={BLACK}
        style={{paddingTop: headerMaxHeight}}
      />
    );
  }

  if (error) {
    return <Text>Error:{error.message}</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        scrollEventThrottle={16}
        onScroll={onScroll}
        data={data[propName]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <ListItem {...item}></ListItem>}
        key={numColumns}
        numColumns={numColumns}
        contentContainerStyle={{
          ...(style as object),
          paddingTop: headerMaxHeight,
          paddingHorizontal: numColumns === 2 ? rem(6) : 0,
        }}
        progressViewOffset={headerMaxHeight}
        refreshing={networkStatus === 4}
        onRefresh={() => refetch()}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          fetchMore({
            variables: {
              start: data[propName].length,
              first: ITEMS_PER_PAGE,
              ...filter,
            },
            updateQuery: (previousResult, {fetchMoreResult}) => {
              if (!fetchMoreResult || fetchMoreResult[propName].length === 0) {
                return previousResult;
              }

              return {
                [propName]: previousResult[propName].concat(
                  fetchMoreResult[propName],
                ),
              };
            },
          });
        }}
      />
      {loading && <ActivityIndicator size={35} color={BLACK} />}
    </SafeAreaView>
  );
}
