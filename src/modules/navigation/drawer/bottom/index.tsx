import React, {useState, useEffect, useContext} from 'react';
import {Modal, Animated} from 'react-native';
import styled from 'styled-components/native';
import {height} from '@src/constants/dimensions';
import rem from '@src/constants/rem';
import filterContext from '@src/context/filter';
import Text from '@src/modules/atoms/text';
import Space from '@src/modules/atoms/space';

export default function BottomDrawer({
  visible,
  setVisible,
  data,
}: BottomDrawerProps) {
  const [position, setPosition] = useState(new Animated.Value(-1 * height));
  const filterData = useContext(filterContext);

  const initFilterData = () => {
    filterData.action.setTag(undefined);
    filterData.action.setSort('time');
  };

  useEffect(() => {
    if (visible) {
      Animated.timing(position, {toValue: 0, duration: 500}).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} transparent animationType="fade">
      <Wrapper>
        <Background
          onPress={() => {
            setVisible(false);
            setPosition(new Animated.Value(-1 * height));
          }}
        />
        <AnimatedContent style={{position: 'absolute', bottom: position}}>
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
