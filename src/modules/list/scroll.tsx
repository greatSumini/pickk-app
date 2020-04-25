import React, {useState, useEffect, useRef} from 'react';
import {
  NativeSyntheticEvent,
  NativeScrollEvent,
  ScrollView,
  ActivityIndicator,
  View,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {DocumentNode} from 'graphql';

import Text from '../atoms/text';
import {BLACK} from '@src/constants/colors';

type IProps = {
  category: string;
  // tslint:disable-next-line: no-any
  filter?: any;
  query: DocumentNode;
  // tslint:disable-next-line: no-any
  ListItem: React.FunctionComponent<any>;
  Skeleton?: React.FunctionComponent<{style?: React.CSSProperties}>;
  NoResult?: React.FunctionComponent;
  // tslint:disable-next-line: no-any
  listFilter?: (data: any) => boolean;
  onScroll?: (event: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const ITEMS_PER_PAGE = 20;
const PADDING_TO_BOTTOM = 500;

const ScrollList = (props: IProps) => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [areMoreItems, setAreMoreItems] = useState(true);
  const [initialFetching, setInitialFetching] = useState(true);
  const [querying, setQuerying] = useState(false);
  const propName = props.category;
  const {listFilter} = props;

  useEffect(() => {
    refetch();
    setInitialFetching(true);
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo();
    }
  }, [props.filter, props.query]);

  const {loading, error, data, fetchMore, refetch} = useQuery(props.query, {
    variables: {
      start: 0,
      first: ITEMS_PER_PAGE,
      ...props.filter,
    },
    notifyOnNetworkStatusChange: true,
    onCompleted: () => setInitialFetching(false),
  });

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const {layoutMeasurement, contentOffset, contentSize} = e.nativeEvent;
    if (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - PADDING_TO_BOTTOM
    ) {
      loadMoreItems();
    }
    if (props.onScroll) {
      props.onScroll(e);
    }
  };

  const loadMoreItems = () => {
    if (!areMoreItems || querying) {
      return;
    }
    setQuerying(true);
    return fetchMore({
      variables: {
        start: data[propName].length,
        first: ITEMS_PER_PAGE,
      },
      updateQuery: (previousResult, {fetchMoreResult}) => {
        if (!fetchMoreResult) {
          return previousResult;
        }
        if (fetchMoreResult.length < ITEMS_PER_PAGE) {
          setAreMoreItems(false);
        }
        setQuerying(false);
        return Object.assign({}, previousResult, {
          // Append the new posts results to the old one
          [propName]: [
            ...previousResult[propName],
            ...fetchMoreResult[propName],
          ],
        });
      },
    });
  };

  console.log(loading, initialFetching, !!data);

  if (!loading && initialFetching) {
    setInitialFetching(false);
  }

  if (loading || initialFetching) {
    return props.Skeleton ? (
      <props.Skeleton />
    ) : (
      <ActivityIndicator size={35} color={BLACK} />
    );
  }

  if (data && data[propName]) {
    if (data[propName].length < ITEMS_PER_PAGE && areMoreItems) {
      setAreMoreItems(false);
    }
    if (data[propName].length === 0 && props.NoResult) {
      return <props.NoResult />;
    }
    return (
      <>
        <ScrollView
          ref={scrollViewRef}
          scrollsToTop
          onScroll={handleScroll}
          scrollEventThrottle={16}
          style={{
            display: 'flex',
            width: '100%',
          }}>
          <View
            style={{
              display: 'flex',
              width: '100%',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {data[propName]
              .filter(listFilter ? listFilter : () => true)
              .map((item, index) => (
                <props.ListItem {...item} key={index}></props.ListItem>
              ))}
          </View>
        </ScrollView>
        {loading && <ActivityIndicator size={35} color={BLACK} />}
      </>
    );
  }
  if (error) {
    return <Text>Error!</Text>;
  }
  return props.Skeleton ? <props.Skeleton /> : <Text>loading...</Text>;
};

export default ScrollList;
