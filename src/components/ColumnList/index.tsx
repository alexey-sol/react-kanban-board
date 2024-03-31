import { ColumnListStyled } from './style';
import { useColumnListData } from './utils';
import {
  CardItem,
  StubItem,
} from '@/components/ColumnList/components';
import {
  type FC,
  memo,
  useCallback,
} from 'react';

export const ColumnList: FC = memo(() => {
  const { cards } = useColumnListData();
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
    <ColumnListStyled>
      {hasCards ? renderCards() : renderStub()}
    </ColumnListStyled>
  );
});
