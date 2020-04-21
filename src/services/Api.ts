import axios from 'axios';
import Config from 'react-native-config';
import {print, DocumentNode} from 'graphql';

class RequestConfig {
  public baseURL: string;
  public headers?: {authorizationuserid?: number; authorizationtoken?: string};

  constructor(baseURL: string) {
    this.baseURL = baseURL;
  }

  public setAuth = (id?: number, token?: string) => {
    if (id && token) {
      this.headers = {
        authorizationuserid: id,
        authorizationtoken: token,
      };
    }
  };
}

const base = (id?: number, token?: string) => {
  const requestConfig = new RequestConfig(Config.API_HOST);
  requestConfig.setAuth(id, token);
  return axios.create(requestConfig);
};

export const mutate = async (
  // tslint:disable-next-line: no-any
  query: DocumentNode,
  // tslint:disable-next-line: no-any
  variables: any,
  id?: number,
  token?: string,
) =>
  base(id, token)
    .post('', {
      query: print(query),
      variables,
    })
    .then(response => response.data);

export default base;
