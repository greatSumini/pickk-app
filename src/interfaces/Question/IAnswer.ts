export interface IAnswer {
  id: number;
  content: string;
  userId: number;
  userName: string;
  isByPartner: boolean;
  brandName: string;
  createdAt: string;
}

export type IAnswerInputDTO = { content: string };
