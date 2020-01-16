import React, {useState, useEffect} from 'react';
import {Modal, Animated} from 'react-native';
import styled from 'styled-components/native';

import {height} from '@src/constants/dimensions';
import rem from '@src/constants/rem';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';
import {BottomDrawerProps} from './props';

export default function BottomDrawer({
  visible,
  setVisible,
  data,
  style,
}: BottomDrawerProps) {
  const [position, setPosition] = useState(new Animated.Value(-1 * height));

  useEffect(() => {
    if (visible) {
      Animated.timing(position, {toValue: 0, duration: 300}).start();
    }
  }, [visible]);

  const closeModal = () => {
    setVisible(false);
    setPosition(new Animated.Value(-1 * height));
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={closeModal}>
      <Wrapper>
        <Background onPress={closeModal} />
        <AnimatedContent
          style={{
            position: 'absolute',
            bottom: position,
            ...(style as object),
          }}>
          {data.map((v, i) => (
            <React.Fragment key={i}>
              {v.title && <Text level={2}>{v.title}</Text>}
              <Space direction="COL" size={rem(10)} />
              {v.component && v.component}
            </React.Fragment>
          ))}
        </AnimatedContent>
      </Wrapper>
    </Modal>
  );
}

const Wrapper = styled.View({
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.5)',
});

const Content = styled.View({
  width: '100%',
  backgroundColor: 'white',
  paddingVertical: rem(16),
  paddingHorizontal: rem(16),
  borderTopLeftRadius: rem(16),
  borderTopRightRadius: rem(16),
});

const AnimatedContent = Animated.createAnimatedComponent(Content);

const Background = styled.TouchableOpacity({
  flex: 1,
});
