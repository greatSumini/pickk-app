import React, {createContext, useContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import {meReadConfig} from '@src/services/User/config';
import {RequestConfig} from '@src/services/Api';

const AppContext = createContext({
  state: {me: null, accessToken: null},
  action: {
    setAccessToken: null,
    signOut: null,
    getMe: null,
    generateConfig: null,
  },
});
export const useAppContext = () => useContext(AppContext);

export const withAppContext = (
  WrappedComponent: React.FunctionComponent,
) => () => {
  const [me, setMe] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    getAccessToken();
  }, []);

  useEffect(() => {
    if (accessToken) {
      getMe(accessToken);
    } else {
      setMe(null);
    }
  }, [accessToken]);

  const getAccessToken = async () => {
    const token = await AsyncStorage.getItem('accessToken');
    setAccessToken(token);
  };

  const getMe = async (token?: string) => {
    if (token) {
      await AsyncStorage.setItem('accessToken', token);
    }

    try {
      const {data} = await axios(generateConfig(meReadConfig(), true));
      setMe(data);
    } catch (err) {
      setMe(null);
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('accessToken');
    setAccessToken(null);
    setMe(null);
  };

  const generateConfig = (
    config: RequestConfig,
    auth?: boolean,
  ): RequestConfig => {
    if (auth && accessToken) {
      config.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
    }
    return config;
  };

  const appStore = {
    state: {me, accessToken},
    action: {setAccessToken, signOut, getMe, generateConfig},
  };

  return (
    <AppContext.Provider value={appStore}>
      <WrappedComponent />
    </AppContext.Provider>
  );
};
