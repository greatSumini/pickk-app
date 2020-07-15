export type TokenResponse = {
  access: string;
  refresh: string;
};

export enum AppleClientType {
  Web = 'WEB',
  App = 'APP',
}
