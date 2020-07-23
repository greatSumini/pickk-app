import {IncomingMessage} from 'http';

import {baseConfig} from '../Api';
import {QuestionListRequestParams, IQuestionInputDTO} from '@src/interfaces';

export const listConfig = (
  params: QuestionListRequestParams,
  req?: IncomingMessage,
) => baseConfig(true, req).get('/questions/', {params});

export const readConfig = (id: number, req?: IncomingMessage) =>
  baseConfig(true, req).get(`/questions/${id}/`);

export const createConfig = (
  questionInputDTO: IQuestionInputDTO,
  req?: IncomingMessage,
) => baseConfig(true, req).post('/questions/', questionInputDTO);
