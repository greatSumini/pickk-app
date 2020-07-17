import React, {useState, useContext, createContext} from 'react';
import {useNavigation, useRoute, RouteProp} from '@react-navigation/native';

import OrderService from '@src/services/Order';
import {useOrderCancel} from '@src/hooks';
import {OrderItem, PackagePrice} from '@src/types';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';
import {Alert} from 'react-native';
import {useAppContext} from './app';

const CancelContext = createContext({
  state: {
    orderResponse: null,
    selected: new Set<OrderItem>(),
    reason: '',
  },
  action: {
    setReason: null,
    getSize: null,
    isSelected: null,
    getSelectedNum: null,
    toggleSelect: null,
    select: null,
    unselect: null,
    selectAll: null,
    unselectAll: null,
    getPrice: null,
    getSelectedItems: null,
    complete: null,
  },
});

export const useCancelContext = () => useContext(CancelContext);

export const withCancelContext = (
  WrappedComponent: React.FunctionComponent,
) => () => {
  const {generateConfig} = useAppContext().action;
  const navigation = useNavigation();
  const route = useRoute<RouteProp<AppStackParams, 'OrderCancel'>>();
  const {id} = route.params;
  const {data: orderResponse} = useOrderCancel(Number(id), generateConfig);
  const [selected, setSelected] = useState(new Set<OrderItem>());
  const [reason, setReason] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const getSize = () => {
    return Object.values(orderResponse.order).reduce(
      (acc, brand) => acc + brand.orderItems.length,
      0,
    );
  };

  const isSelected = (item: OrderItem) => {
    return (
      [...selected].findIndex(
        (sItem) =>
          sItem.productName === item.productName && sItem.id === item.id,
      ) >= 0
    );
  };

  const getSelectedNum = () => {
    return selected.size;
  };

  const getSelectedItems = (items: OrderItem[]) =>
    items.reduce<OrderItem[]>(
      (acc, item) => (isSelected(item) ? acc.concat(item) : acc),
      [],
    );

  const toggleSelect = (item: OrderItem) => {
    if (isSelected(item)) {
      unselect(item);
    } else {
      select(item);
    }
  };

  const select = (item: OrderItem) => {
    const sumin = new Set(selected);
    sumin.add(item);
    setSelected(sumin);
  };

  const unselect = (item: OrderItem) => {
    setSelected(
      new Set(
        [...selected].filter(
          (sItem) =>
            !(
              sItem.productName === item.productName && sItem.name === item.name
            ),
        ),
      ),
    );
  };

  const selectAll = () => {
    setSelected(
      new Set<OrderItem>(
        orderResponse.order.reduce(
          (acc, currBrand) => acc.concat(currBrand.orderItems),
          [],
        ),
      ),
    );
  };

  const unselectAll = () => {
    setSelected(new Set<OrderItem>());
  };

  const getPrice = (): PackagePrice => {
    const shippingFee = orderResponse.order.reduce((price, brand) => {
      const {defaultFee, minimumForFree} = brand.shippingPolicy;

      const totalPaidAmount = brand.orderItems.reduce(
        (brandPrice, item) => brandPrice + item.paidAmount,
        0,
      );
      const selectedPaidAmount = brand.orderItems
        .filter((item) => isSelected(item))
        .reduce((brandPrice, item) => brandPrice + item.paidAmount, 0);
      return (
        price +
        (totalPaidAmount >= minimumForFree &&
        selectedPaidAmount < minimumForFree &&
        selectedPaidAmount !== totalPaidAmount
          ? brand.shippingFee
          : 0)
      );
    }, 0);
    const totalPaidAmount = orderResponse.order.reduce((totalPrice, brand) => {
      return (
        totalPrice +
        brand.shippingFee +
        brand.orderItems.reduce(
          (brandPrice, item) => brandPrice + item.paidAmount,
          0,
        )
      );
    }, 0);

    const claimedAmount = orderResponse.order.reduce((totalPrice, brand) => {
      const {defaultFee, minimumForFree} = brand.shippingPolicy;
      const totalPaidAmount = brand.orderItems.reduce(
        (brandPrice, item) => brandPrice + item.paidAmount,
        0,
      );
      const selectedPaidAmount = brand.orderItems
        .filter((item) => isSelected(item))
        .reduce((brandPrice, item) => brandPrice + item.paidAmount, 0);
      const shippingFee =
        totalPaidAmount < minimumForFree &&
        selectedPaidAmount === totalPaidAmount
          ? brand.shippingFee
          : 0;
      return totalPrice + selectedPaidAmount + shippingFee;
    }, 0);

    /*const claimedAmount = [...selected].reduce(
      (price, item) => price + item.paidAmount,
      0
    );*/

    return {
      shippingFee,
      totalPaidAmount,
      claimedAmount,
    };
  };

  const complete = async () => {
    if (isSubmitting) {
      return;
    }
    setSubmitting(true);
    try {
      await OrderService.cancel(
        [...selected].map((item) => item.id),
        reason,
      );
      navigation.navigate('ClaimComplete', {type: 'cancel'});
    } catch (err) {
      console.log(err.response);
      Alert.alert(
        '문제가 발생했습니다. 문의 남겨주시면 신속히 처리해드리겠습니다. - ' +
          err.response.data.errorMessage,
      );
    }
    setSubmitting(false);
  };

  const cancelStore = {
    state: {orderResponse, selected, reason},
    action: {
      setReason,
      getSize,
      isSelected,
      getSelectedNum,
      toggleSelect,
      select,
      unselect,
      selectAll,
      unselectAll,
      getPrice,
      getSelectedItems,
      complete,
    },
  };

  return (
    <CancelContext.Provider value={cancelStore}>
      {orderResponse && <WrappedComponent />}
    </CancelContext.Provider>
  );
};
