import axios from 'axios';
import {mutate} from 'swr';

import {
  signUpCheckDuplicateConfig,
  signUpConfig,
  signInConfig,
  verifyConfig,
  appleSignInConfig,
} from './config';
import {meReadConfig} from '../User/config';
import {IUserInputDTO} from '@src/interfaces';
import {ProviderType, AppleClientType} from '@src/types';
import {IncomingMessage} from 'http';

const signIn = async (data: {providerType: ProviderType; providerId: string}) =>
  axios(signInConfig(data)).then((res) => {
    const {access, refresh} = res.data;
    return res.data;
  });

const signOut = () => {
  mutate(JSON.stringify(verifyConfig()));
  mutate(JSON.stringify(meReadConfig()), {isLoggedIn: false});
};

const signUp = async (userInputDTO: IUserInputDTO): Promise<void> =>
  axios(signUpConfig(userInputDTO)).then((res) => {
    const {access, refresh} = res.data;
  });

const signUpCheckDuplicate = async (params: {
  name?: string;
  email?: string;
}): Promise<boolean> =>
  axios(signUpCheckDuplicateConfig(params))
    .then(() => true)
    .catch(() => false);

const verify = async (req?: IncomingMessage): Promise<{id: number}> =>
  axios(verifyConfig(req)).then((res) => res.data);

const appleSignIn = async (
  clientType: AppleClientType,
  code: string,
): Promise<{providerType: ProviderType; providerId: string}> =>
  axios(appleSignInConfig(clientType, code)).then((res) => res.data);

const AuthService = {
  signIn,
  signOut,
  signUp,
  signUpCheckDuplicate,
  verify,
  appleSignIn,
};

export default AuthService;
