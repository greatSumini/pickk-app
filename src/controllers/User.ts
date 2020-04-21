import * as UserService from '../services/User';

export const createUser = async (providerType: string, providerId: string) =>
  UserService.createUser(providerType, providerId);

export const loginWithFacebook = async (): Promise<boolean> => {
  const facebookdId = await UserService.authFacebook();
  if (facebookdId === 'canceled' || facebookdId === 'error') {
    return Promise.resolve(false);
  }

  const {data} = await UserService.createUser('FACEBOOK', `fb${facebookdId}`);
  const {id, name, rank, profileImageUrl} = data.createUser;

  // UserService.login(id, name, rank, profileImageUrl);
  return Promise.resolve(true);
};

export const logout = () => {
  UserService.logout();
};
