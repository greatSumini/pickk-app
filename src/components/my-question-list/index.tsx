import React from 'react';
import styled from 'styled-components/native';

import {useQuestionList} from '@src/hooks';
import {parseTime} from '@src/lib/utils/date-parser';
import NoResult from '@src/modules/molecules/no-result';
import BackHeader from '@src/modules/molecules/header/back';
import MyQuestionListDateHeader from './date-header';
import MyQuestionCard from './card';
import InquiryIcon from '@src/assets/icons/inquiry';
import {Line} from '@src/modules/atoms';
import {rem, MIDDLE_GREY, WHITE} from '@src/constants';
import {useAppContext} from '@src/context/app';

export default function MyQuestionListScreen() {
  const {generateConfig} = useAppContext().action;
  const {data: questionList} = useQuestionList(
    {
      limit: 25,
      offset: 0,
      isMine: true,
    },
    generateConfig,
  );

  if (!questionList) return <></>;

  const {results} = questionList;

  return (
    <Wrapper>
      <BackHeader title='내 문의내역' />
      {results.length === 0 && (
        <NoResult
          icon={
            <InquiryIcon
              style={{width: rem(70), height: rem(67)}}
              fill={MIDDLE_GREY}
            />
          }
          text={`최근 문의한 내역이 없습니다.\n문의작성은 상품상세의 문의하기를 이용해주세요.`}
        />
      )}
      {results.map((question, index) => {
        const curDate = parseTime(new Date(question.updatedAt), true);
        const beforeDate =
          index > 0
            ? parseTime(new Date(results[index - 1].updatedAt), true)
            : null;

        const isDateChanged =
          beforeDate && curDate.localeCompare(beforeDate) !== 0;
        return (
          <React.Fragment key={index}>
            {(index === 0 || isDateChanged) && (
              <MyQuestionListDateHeader date={curDate} />
            )}
            <MyQuestionCard {...question} />
            <Line />
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.ScrollView({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  minHeight: '100%',
  backgroundColor: WHITE,
});
