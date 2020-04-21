import {Platform} from 'react-native';
import {LoginManager, AccessToken} from 'react-native-fbsdk';
import gql from 'graphql-tag';

import {client} from '../apollo/client';

import * as Api from './Api';
import {User} from '@src/models/User';

export const authFacebook = async (): Promise<string> => {
  let result;
  if (Platform.OS === 'android') {
    LoginManager.setLoginBehavior('web_only');
  }

  result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  if (!result.isCanceled) {
    const {accessToken} = await AccessToken.getCurrentAccessToken();
    const data = await fetch(
      `https://graph.facebook.com/v2.5/me?access_token=${accessToken}`,
    ).then(response => response.json());
    return Promise.resolve(data.id);
  } else {
    return Promise.resolve('canceled');
  }
};

export const createUser = async (providerType: string, providerId: string) =>
  Api.mutate(
    gql`
      mutation CreateUser($userAccountInfo: UserCredentialInput!) {
        createUser(userAccountInfo: $userAccountInfo) {
          id
          isNewUser
          token
          name
          profileImageUrl
          rank
        }
      }
    `,
    {
      userAccountInfo: {
        providerType: providerType.toUpperCase(),
        providerId,
      },
    },
  );

export const login = (
  id: number,
  name: string,
  rank: string,
  profileImageUrl: string,
) => {
  const userInfo = new User(id, name, rank, profileImageUrl);
  client.writeData({data: {userInfo: {...userInfo, __typename: 'UserInfo'}}});
};

export const logout = () => {
  client.writeData({data: {userInfo: {__typename: 'UserInfo'}}});
};
