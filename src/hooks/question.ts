import useRequest from './api/useRequest';

import {QuestionListRequestParams, IQuestion} from '@src/interfaces';
import {ListResponse} from '@src/types';
import {listConfig, readConfig} from '@src/services/Question/config';

export const useQuestionList = (
  params: QuestionListRequestParams,
  generateConfig?: any,
  initialData?: any,
) =>
  useRequest<ListResponse<IQuestion>>(
    generateConfig(listConfig(params), true),
    {
      initialData,
    },
  );

export const useQuestion = (
  id: number,
  generateConfig?: any,
  initialData?: any,
) => useRequest<IQuestion>(generateConfig(readConfig(id), true), initialData);
