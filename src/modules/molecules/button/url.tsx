import React, {useCallback} from 'react';
import {Linking, Alert, Button} from 'react-native';
import TouchableCmp from '@src/modules/atoms/touchable-component';
import styled from 'styled-components/native';

const URLButton = ({url, children, style}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
    <Touchable style={style} onPress={handlePress}>
      {children}
    </Touchable>
  );
};

const Touchable = styled(TouchableCmp)({});

export default React.memo(URLButton);
