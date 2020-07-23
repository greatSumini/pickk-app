import axios from 'axios';
import {IncomingMessage} from 'http';

import {
  QuestionListRequestParams,
  IQuestion,
  IQuestionInputDTO,
} from '@src/interfaces';
import {ListResponse} from '@src/types';
import {listConfig, readConfig, createConfig} from './config';

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

export const create = async (
  questionInputDTO: IQuestionInputDTO,
  generateConfig?: any,
  req?: IncomingMessage,
) =>
  axios(generateConfig(createConfig(questionInputDTO, req), true)).then(
    (res) => res.data,
  );

const QuestionService = {
  list,
  read,
  create,
};

export default QuestionService;
