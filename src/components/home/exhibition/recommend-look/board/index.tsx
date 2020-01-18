import React from 'react';
import styled from 'styled-components/native';

import HomeLookCard, {HomeLookCardProps} from '../../look-card';

export type BoardProps = {
  current: number;
  cards: HomeLookCardProps[];
};

const CARDS_PER_PAGE = 4;

export default function RecommendLookBoard({current, cards}: BoardProps) {
  return (
    <Wrapper>
      {cards
        .slice(current * CARDS_PER_PAGE, (current + 1) * CARDS_PER_PAGE)
        .map(item => (
          <HomeLookCard key={item.title + item.name} {...item} />
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.View({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
});
