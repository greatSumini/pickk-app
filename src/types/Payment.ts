export enum Pgs {
  Inicis = 'html5_inicis',
  Kakaopay = 'kakaopay'
}

export enum Methods {
  Card = 'card',
  Trans = 'trans',
  Phone = 'phone',
  Vbank = 'vbank'
}

export type PayMethod = {
  pg: Pgs;
  payMethod: Methods;
};

export const METHOD_LABELS = {
  card: '신용카드',
  trans: '실시간 계좌이체',
  phone: '휴대폰 소액결제',
  vbank: '가상계좌'
};

export type Buyer = {
  name: string;
  tel: string;
  addr: string;
  email: string;
  postcode: string;
};
