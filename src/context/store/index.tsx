import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import {
  StoreType,
  CartStore,
  OrderSheetStore,
  SelectedProduct,
  StoreProduct,
} from '@src/types';
import {IStoreContext} from './IStoreContext';

const StoreContext = createContext<IStoreContext>({
  state: {cart: null, orderSheet: null},
  action: {
    setItem: null,
    setItems: null,
    getItemList: null,
    removeItem: null,
    removeItems: null,
    clear: null,
    orderProducts: null,
  },
});
export const useStoreContext = () => useContext<IStoreContext>(StoreContext);

export const withStoreContext = (
  WrappedComponent: React.FunctionComponent,
) => () => {
  const [cart, setCart] = useState<CartStore>(null);
  const [orderSheet, setOrderSheet] = useState<OrderSheetStore>(null);

  const getStoreByType = async (type: StoreType) => {
    const itemStoreStr = await AsyncStorage.getItem('ItemStore');
    const itemStore = JSON.parse(itemStoreStr);
    if (!itemStore || itemStore[type] === undefined) {
      return {};
    }
    return itemStore[type];
  };

  useEffect(() => {
    getStoreByType(StoreType.Cart).then((res) => setCart(res));
    getStoreByType(StoreType.OrderSheet).then((res) => setOrderSheet(res));
  }, []); // init store

  useEffect(() => {
    AsyncStorage.setItem(
      'ItemStore',
      JSON.stringify({
        [StoreType.Cart]: cart,
        [StoreType.OrderSheet]: orderSheet,
      }),
    );
  }, [cart, orderSheet]); // apply store

  console.log('orderSheet', orderSheet);

  const setItem = async (
    type: StoreType,
    itemId: number,
    brandId: number,
    productId: number,
    quantity: number,
    postItem: StoreProduct['postItem'],
  ) => {
    const prevStore: CartStore | OrderSheetStore =
      type === StoreType.Cart ? cart : orderSheet;
    const setFunc = type === StoreType.Cart ? setCart : setOrderSheet;
    const store = {...prevStore};
    const newItem = {itemId, productId, quantity, postItem};

    store[brandId] = (prevStore[brandId] || [])
      .filter((item) => item.itemId !== itemId || item.productId !== productId)
      .concat(newItem);
    setFunc(store);
  };

  const setItems = async (
    type: StoreType,
    items: Array<{brandId: number} & StoreProduct>,
  ) => {
    for (const item of items) {
      const {itemId, brandId, productId, quantity, postItem} = item;
      await setItem(type, itemId, brandId, productId, quantity, postItem);
    }
  };

  const getItemList = (type: StoreType): StoreProduct[] => {
    try {
      const itemStore: CartStore | OrderSheetStore =
        type === StoreType.Cart ? cart : orderSheet;
      return Object.values(itemStore).reduce((acc, curr) => {
        return acc.concat(curr);
      }, []);
    } catch {
      return [];
    }
  };

  const removeItem = async (
    type: StoreType,
    itemId: number,
    brandId: number,
    productId: number,
  ) => {
    const prevStore: CartStore | OrderSheetStore =
      type === StoreType.Cart ? cart : orderSheet;
    const setFunc = type === StoreType.Cart ? setCart : setOrderSheet;
    const store = {...prevStore};

    store[brandId] = (prevStore[brandId] || []).filter(
      (item) => item.itemId !== itemId || item.productId !== productId,
    );
    if (store[brandId].length === 0) {
      delete store[brandId];
    }
    setFunc(store);
  };

  const removeItems = async (
    type: StoreType,
    items: Array<
      Pick<StoreProduct, 'itemId' | 'productId'> & {brandId: number}
    >,
  ) => {
    for (const item of items) {
      const {itemId, brandId, productId} = item;
      await removeItem(type, itemId, brandId, productId);
    }
  };

  const clear = (type: StoreType) => {
    const setFunc = type === StoreType.Cart ? setCart : setOrderSheet;
    setFunc({});
  };

  const orderProducts = async (
    items: Array<
      SelectedProduct & {
        postItem: StoreProduct['postItem'];
      }
    >,
  ) => {
    clear(StoreType.OrderSheet);
    for (const item of items) {
      const {itemId, brandId, productId, quantity, postItem} = item;
      await setItem(
        StoreType.OrderSheet,
        itemId,
        brandId,
        productId,
        quantity,
        postItem,
      );
    }
  };

  const storeStore = {
    state: {cart, orderSheet},
    action: {
      setItem,
      setItems,
      getItemList,
      removeItem,
      removeItems,
      clear,
      orderProducts,
    },
  };

  return (
    <StoreContext.Provider value={storeStore}>
      <WrappedComponent />
    </StoreContext.Provider>
  );
};
