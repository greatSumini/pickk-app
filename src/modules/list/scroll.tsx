import React from 'react';
import {SafeAreaView, FlatList, ActivityIndicator} from 'react-native';
import Text from '../atoms/text';

import {useQuery} from '@apollo/react-hooks';

type IProps = {
  category: string;
  // tslint:disable-next-line: no-any
  filter?: any;
  // tslint:disable-next-line: no-any
  query: any;
  // tslint:disable-next-line: no-any
  ListItem: React.FunctionComponent<{data: any}>;
  Skeleton?: React.FunctionComponent;
};

const ITEMS_PER_PAGE = 20;

export default function ScrollList(props: IProps) {
  const {category, filter, query, ListItem, Skeleton} = props;
  const propName = category;

  const {networkStatus, error, data, refetch, fetchMore} = useQuery(query, {
    variables: {
      start: 0,
      first: ITEMS_PER_PAGE,
      ...filter,
    },
    notifyOnNetworkStatusChange: true,
  });

  if (networkStatus === 1) {
    return Skeleton ? <Skeleton /> : <ActivityIndicator />;
  }

  if (error) {
    return <Text>Error:{error.message}</Text>;
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data[propName]}
        renderItem={item => <ListItem data={item}></ListItem>}
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
              if (!fetchMoreResult || fetchMoreResult.feed.length === 0) {
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
    </SafeAreaView>
  );
}
