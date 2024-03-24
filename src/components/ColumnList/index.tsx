import { CardPreview } from '../CardPreview';
import { CardPreviewDragLayer } from '../CardPreviewDragLayer';
import {
  ColumnListStyled,
  StubTextStyled,
} from './style';
import { useAppSelector } from '@/app/store/hooks';
import { ListItem } from '@/components/ListItem';
import { useColumnContext } from '@/contexts/ColumnContext';
import { selectAllCardsByStatus } from '@/slice/selectors';
import {
  type FC,
  memo,
  useCallback,
} from 'react';

const STUB_TEXT = 'Nothing so far';

export const ColumnList: FC = memo(() => {
  const { taskStatus } = useColumnContext();
  const cards = useAppSelector((state) => selectAllCardsByStatus(state, taskStatus));
  const hasCards = cards.length > 0;

  const renderCards = useCallback(() => cards.map((card, index) => (
    <ListItem index={index} key={card.id}>
      <CardPreview card={card} />
      <CardPreviewDragLayer />
    </ListItem>
  )), [
    cards,
  ]);

  const renderStub = useCallback(() => (
    <ListItem>
      <StubTextStyled>{STUB_TEXT}</StubTextStyled>
    </ListItem>
  ), []);

  return (
    <ColumnListStyled>
      {hasCards ? renderCards() : renderStub()}
    </ColumnListStyled>
  );
});
