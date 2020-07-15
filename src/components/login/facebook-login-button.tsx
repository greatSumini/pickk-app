import React from 'react';
import {LoginButton, AccessToken} from 'react-native-fbsdk';
import {Alert} from 'react-native';

export default function FacebookLoginButton() {
  const handleLoginFinished = (error, result) => {
    if (error || result.isCancelled) {
      Alert.alert('Error', '로그인이 정상적으로 완료되지 않았습니다.');
    } else {
      console.log(result);
      AccessToken.getCurrentAccessToken().then((data) => {
        console.log(data);
      });
    }
  };

  return (
    <>
      <LoginButton
        onLoginFinished={handleLoginFinished}
        onLogoutFinished={() => console.log('logout.')}
      />
    </>
  );
}
