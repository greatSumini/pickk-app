import React, {useEffect, useState} from 'react';
import styled from 'styled-components/native';
import {
  Animated,
  PanResponder,
  PanResponderGestureState,
  GestureResponderEvent,
} from 'react-native';

import {usePriceFilterContext} from '@src/context/filter';
import rem from '@src/constants/rem';
import {width} from '@src/constants/dimensions';
import colors from '@src/constants/colors';

const PADDING = rem(16);
const SIZE = width - 2 * PADDING;
const DIM = rem(20);
const MIN_PRICE = 10000;
const MAX_PRICE = 1000000;
const LENGTH = Math.floor(SIZE - DIM);

export default function PriceBar() {
  const priceFilterContext = usePriceFilterContext();
  const {
    minimumPrice,
    maximumPrice,
    minState,
    maxState,
  } = priceFilterContext.state;
  const {setMinState, setMaxState} = priceFilterContext.action;

  const [minPosition] = useState(new Animated.Value(minState));
  const [maxPosition] = useState(new Animated.Value(maxState));
  const [width] = useState(new Animated.Value(maxState - minState + DIM));

  useEffect(() => {
    if (minState === 0) {
      minPosition.setValue(minState);
      maxPosition.setValue(maxState);
      width.setValue(maxState - minState + DIM);
    }
  }, [minState, maxState, minimumPrice, maximumPrice]);

  const priceHandler = (value: number) => {
    const priceTotal = MAX_PRICE - MIN_PRICE;
    const price = (priceTotal * value) / 10;
    return Math.floor(price);
  };

  const minPostionMove = (guesture: PanResponderGestureState) => {
    if (Math.abs(guesture.dx) > 5) {
      const value = minState + guesture.dx < 0 ? 0 : minState + guesture.dx;
      const maxPositionValue = (maxPosition as any)._value;
      const proportion = Math.floor((value / LENGTH) * 10);

      if (value < maxPositionValue) {
        minPosition.setValue(value);
        width.setValue(maxPositionValue - value + DIM);
        minimumPrice.setValue(priceHandler(proportion));
      }
    }
  };

  const minPositionEnd = (
    evt: GestureResponderEvent,
    guesture: PanResponderGestureState,
  ) => {
    if (Math.abs(guesture.dx) > 5) {
      setMinState(evt.nativeEvent.pageX);
    }
  };

  const maxPostionMove = (guesture: PanResponderGestureState) => {
    if (Math.abs(guesture.dx) > 5) {
      const value =
        maxState + guesture.dx > SIZE - DIM
          ? SIZE - DIM
          : maxState + guesture.dx;
      const minPositionValue = (minPosition as any)._value;
      const proportion = Math.floor((value / LENGTH) * 10);

      if (minPositionValue < value) {
        maxPosition.setValue(value);
        width.setValue(value - minPositionValue + DIM);
        maximumPrice.setValue(priceHandler(proportion));
      }
    }
  };

  const maxPositionEnd = (
    evt: GestureResponderEvent,
    guesture: PanResponderGestureState,
  ) => {
    if (Math.abs(guesture.dx) > 5) {
      setMaxState(evt.nativeEvent.pageX);
    }
  };

  const minPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderTerminationRequest: () => true,
    onPanResponderTerminate: () => true,
    onPanResponderMove: (_, guesture) => {
      minPostionMove(guesture);
    },
    onPanResponderEnd: (evt, guesture) => {
      minPositionEnd(evt, guesture);
    },
  });
  const maxPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderTerminationRequest: () => true,
    onPanResponderTerminate: () => true,
    onPanResponderMove: (_, guesture) => {
      maxPostionMove(guesture);
    },
    onPanResponderEnd: (evt, guesture) => {
      maxPositionEnd(evt, guesture);
    },
  });

  return (
    <Wrapper>
      <MinTumb
        {...minPanResponder.panHandlers}
        style={{position: 'absolute', left: minPosition, zIndex: 100}}
      />
      <PriceRangeBar
        style={{
          position: 'absolute',
          left: minPosition,
          width: width,
        }}
      />
      <MaxTumb
        {...maxPanResponder.panHandlers}
        style={{
          position: 'absolute',
          left: maxPosition,
        }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.View({
  width: SIZE,
  height: rem(10),
  backgroundColor: colors.lightGrey,
  flexDirection: 'row',
  alignItems: 'center',
  borderRadius: rem(5),
  zIndex: -2,
});

const PriceIndicator = styled.View({
  width: rem(20),
  height: rem(20),
  borderRadius: rem(20) / 2,
  backgroundColor: colors.primary,
  borderWidth: rem(3),
  borderColor: colors.white,
  elevation: 3,
});

const PriceRange = styled.View({
  height: rem(10),
  backgroundColor: colors.primary,
  borderRadius: rem(5),
  zIndex: -1,
});

const MinTumb = Animated.createAnimatedComponent(PriceIndicator);
const MaxTumb = Animated.createAnimatedComponent(PriceIndicator);
const PriceRangeBar = Animated.createAnimatedComponent(PriceRange);
