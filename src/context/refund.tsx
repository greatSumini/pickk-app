import React, {useState, useContext, createContext} from 'react';
import {AppStackParams} from '@src/modules/navigation/navigator/stacks/app';
import {useRoute, RouteProp, useNavigation} from '@react-navigation/native';
import {useAppContext} from './app';

import OrderService from '@src/services/Order';
import {OrderItem, PackagePrice, Shipment} from '@src/types';
import {useOrderRefund} from '@src/hooks/OrderItem';

const RefundContext = createContext({
  state: {
    packageResponse: null,
    selected: new Set<OrderItem>(),
    reason: '',
    shipment: {
      courier: '',
      trackingCode: '',
    },
    dontKnow: false,
    sent: false,
  },
  action: {
    setShipment: null,
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
    setDontKnow: null,
    setSent: null,
  },
});

export const useRefundContext = () => useContext(RefundContext);

export const withRefundContext = (
  WrappedComponent: React.FunctionComponent,
) => () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<AppStackParams, 'OrderRefund'>>();
  const {generateConfig} = useAppContext().action;
  const {data: packageResponse} = useOrderRefund(
    route.params.id,
    generateConfig,
  );

  const [selected, setSelected] = useState(new Set<OrderItem>());
  const [reason, setReason] = useState('');
  const [shipment, setShipment] = useState<Shipment>({
    courier: '',
    trackingCode: '',
  });
  const [dontKnow, setDontKnow] = useState(false);
  const [sent, setSent] = useState(false);

  const getSize = () => {
    return packageResponse.orderItems.length;
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
    setSelected(new Set<OrderItem>(packageResponse.orderItems));
  };

  const unselectAll = () => {
    setSelected(new Set<OrderItem>());
  };

  const getPrice = (): PackagePrice => {
    const {defaultFee, minimumForFree} = packageResponse.shippingPolicy;

    const totalPaidAmount = packageResponse.orderItems.reduce(
      (price, item) => price + item.paidAmount,
      0,
    );

    const claimedAmount = [...selected].reduce(
      (price, item) => price + item.paidAmount,
      0,
    );

    const shippingFee =
      defaultFee * (totalPaidAmount >= minimumForFree ? 2 : 1);

    return {
      shippingFee,
      totalPaidAmount,
      claimedAmount,
    };
  };

  const complete = async () => {
    try {
      await OrderService.cancel(
        [...selected].map((item) => item.id),
        reason,
      );
      navigation.navigate('OrderClaimComplete', {type: 'refund'});
    } finally {
    }
  };

  const refundStore = {
    state: {packageResponse, selected, reason, shipment, dontKnow, sent},
    action: {
      setDontKnow,
      setShipment,
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
      setSent,
    },
  };

  return (
    <RefundContext.Provider value={refundStore}>
      {packageResponse && <WrappedComponent />}
    </RefundContext.Provider>
  );
};
