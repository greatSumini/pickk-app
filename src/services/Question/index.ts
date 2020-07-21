import axios from 'axios';
import {IncomingMessage} from 'http';

import {QuestionListRequestParams, IQuestion} from '@src/interfaces';
import {ListResponse} from '@src/types';
import {listConfig, readConfig} from './config';

export const list = async (
  params: QuestionListRequestParams,
  generateConfig?: any,
  req?: IncomingMessage,
): Promise<ListResponse<IQuestion>> =>
  axios(generateConfig(listConfig(params, req), true)).then((res) => res.data);

export const read = async (
  id: number,
  generateConfig?: any,
  req?: IncomingMessage,
): Promise<IQuestion> =>
  axios(generateConfig(readConfig(id, req), true)).then((res) => res.data);

const QuestionService = {
  list,
  read,
};
