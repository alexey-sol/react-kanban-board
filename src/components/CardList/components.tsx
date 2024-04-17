import { type DroppableListItemProps } from '../DroppableListItem';
import {
  DragLayerStyled,
  DroppableListItemStyled,
  StubTextStyled,
} from './style';
import { useCardList } from './utils';
import { CardPreview } from '@/components/CardPreview';
import { useDragLayer } from '@/components/DragLayer/utils';
import { dragTypes } from '@/const';
import {
  type Card,
  type HasIndex,
} from '@/models';
import { isCard } from '@/utils/helpers/guards';
import {
  type FC,
  memo,
} from 'react';

const DRAG_TYPE = dragTypes.CARD;
const STUB_TEXT = 'Nothing so far';

type CardItemProps = Readonly<HasIndex> & {
  readonly card: Card,
};

export const CardItem: FC<CardItemProps> = memo(({
  card,
  index,
}) => {
  const { item: dragItem } = useDragLayer();
  const { handleDrop } = useCardList();
  const onDrop: DroppableListItemProps['handleDrop'] = (item) => handleDrop(item, index);

  return (
    <DroppableListItemStyled dragType={DRAG_TYPE} handleDrop={onDrop}>
      <CardPreview card={card} />
      {isCard(dragItem) && (
        <DragLayerStyled>
          <p>{dragItem.message}</p>
        </DragLayerStyled>
      )}
    </DroppableListItemStyled>
  );
});

export const StubItem: FC = memo(() => {
  const { handleDrop } = useCardList();
  const onDrop: DroppableListItemProps['handleDrop'] = (item) => handleDrop(item);

  return (
    <DroppableListItemStyled dragType={DRAG_TYPE} handleDrop={onDrop}>
      <StubTextStyled>{STUB_TEXT}</StubTextStyled>
    </DroppableListItemStyled>
  );
});
