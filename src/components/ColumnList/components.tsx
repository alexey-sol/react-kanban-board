import { type DroppableListItemProps } from '../DroppableListItem';
import {
  DroppableListItemStyled,
  StubTextStyled,
} from './style';
import { useColumnListData } from './utils';
import { CardPreview } from '@/components/CardPreview';
import { CardPreviewDragLayer } from '@/components/CardPreviewDragLayer';
import { dragTypes } from '@/const';
import { type Card } from '@/models';
import {
  type FC,
  memo,
} from 'react';

const DRAG_TYPE = dragTypes.CARD;
const STUB_TEXT = 'Nothing so far';

type CardItemProps = {
  readonly card: Card,
  readonly index: number,
};

export const CardItem: FC<CardItemProps> = memo(({
  card,
  index,
}) => {
  const { handleDrop } = useColumnListData();
  const onDrop: DroppableListItemProps['handleDrop'] = (item) => handleDrop(item, index);

  return (
    <DroppableListItemStyled dragType={DRAG_TYPE} handleDrop={onDrop}>
      <CardPreview card={card} />
      <CardPreviewDragLayer />
    </DroppableListItemStyled>
  );
});

export const StubItem: FC = memo(() => {
  const { handleDrop } = useColumnListData();
  const onDrop: DroppableListItemProps['handleDrop'] = (item) => handleDrop(item);

  return (
    <DroppableListItemStyled dragType={DRAG_TYPE} handleDrop={onDrop}>
      <StubTextStyled>{STUB_TEXT}</StubTextStyled>
    </DroppableListItemStyled>
  );
});
