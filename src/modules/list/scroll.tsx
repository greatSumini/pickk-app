import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Text from '../atoms/text';

import {useQuery} from '@apollo/react-hooks';
import {BLACK} from '@src/constants/colors';

type IProps = {
  style?: StyleProp<ViewStyle>;
  category: string;
  // tslint:disable-next-line: no-any
  filter?: any;
  // tslint:disable-next-line: no-any
  query: any;
  // tslint:disable-next-line: no-any
  ListItem: React.FunctionComponent<any>;
  Skeleton?: React.FunctionComponent;
  numColumns?: number;
};

const ITEMS_PER_PAGE = 20;
    
export default function ScrollList({
  style,
  category,
  filter,
  query,
  ListItem,
  Skeleton,
  numColumns = 1,
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
      <ActivityIndicator size={35} color={BLACK} />
    );
  }

  if (error) {
    return <Text>Error:{error.message}</Text>;
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={data[propName]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => <ListItem {...item}></ListItem>}
        numColumns={numColumns}
        style={style}
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
