import axios from 'axios';
import {IncomingMessage} from 'http';

import {QuestionListRequestParams, IQuestion} from '@src/interfaces';
import {ListResponse} from '@src/types';
import {listConfig} from './config';

export const list = async (
  params: QuestionListRequestParams,
  generateConfig?: any,
  req?: IncomingMessage,
): Promise<ListResponse<IQuestion>> =>
  axios(generateConfig(listConfig(params, req), true)).then((res) => res.data);
