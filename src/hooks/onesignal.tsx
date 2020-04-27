import {useEffect} from 'react';
import OneSignal, {OpenResult} from 'react-native-onesignal';
import config from '../../config';

export const useOnesignalNotification = () => {
  useEffect(() => {
    OneSignal.setLogLevel(6, 0);
    OneSignal.init(config['onesignal-app-key'], {
      kOSSettingsKeyAutoPrompt: true,
    });
    OneSignal.setLogLevel(6, 0);
    OneSignal.setSubscription(true);

    OneSignal.addEventListener('received', onReceived);
    OneSignal.addEventListener('opened', onOpened);
    OneSignal.addEventListener('ids', onIds);

    return () => {
      OneSignal.removeEventListener('received', onReceived);
      OneSignal.removeEventListener('opened', onOpened);
      OneSignal.removeEventListener('ids', onIds);
    };
  }, []);

  const onReceived = (notification) => {
    console.log('Notification received: ', notification);
  };

  const onOpened = (openResult: OpenResult) => {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  };

  const onIds = (device) => {
    console.log('Device info: ', device);
  };
};
