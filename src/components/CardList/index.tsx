import { CardListStyled } from './style';
import { useCardList } from './utils';
import {
  CardItem,
  StubItem,
} from '@/components/CardList/components';
import {
  type FC,
  memo,
  useCallback,
} from 'react';

export const CardList: FC = memo(() => {
  const { cards } = useCardList();
  const hasCards = cards.length > 0;

  const renderCards = useCallback(() => cards.map((card, index) => (
    <CardItem
      card={card}
      index={index}
      key={card.id}
    />
  )), [
    cards,
  ]);

  const renderStub = useCallback(() => (
    <StubItem />
  ), []);

  return (
    <CardListStyled>
      {hasCards ? renderCards() : renderStub()}
    </CardListStyled>
  );
});
