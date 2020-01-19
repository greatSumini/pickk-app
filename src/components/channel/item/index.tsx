import React from 'react';
import Item from '@src/components/ranking-list/item';

const withItem = WrappedComponent => props => {
  return <WrappedComponent {...props.itemInfo} />;
};

export default withItem(Item);
