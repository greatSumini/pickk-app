import React from 'react';
import RNKakao from 'rn-kakao-login';

import {Button} from '@src/modules/atoms';

export default function KakaoLoginButton() {
  const kakaoLogin = async () => {
    try {
      const result = await RNKakao.login();
      console.log(result);
    } catch (e) {
      this.setState({
        userInfo: `Error: ${e}`,
      });
    }
  };

  return (
    <>
      <Button title='로그인' onPress={kakaoLogin} />
    </>
  );
}
