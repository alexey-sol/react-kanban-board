import {
  DragLayerStyled,
  DroppableListItemStyled,
  HideableBoardColumnStyled,
} from './style';
import { useBoardColumn } from './utils';
import { useAppDispatch } from '@/app/store/hooks';
import { ColumnContent } from '@/components/ColumnContent';
import { dragTypes } from '@/const';
import { type HasIndex } from '@/models';
import { updateColumn } from '@/slices/board';
import { isColumn } from '@/utils/helpers/guards';
import {
  type FC,
  useCallback,
} from 'react';

type BoardColumnProps = Readonly<HasIndex> & {
  readonly dragItem: unknown,
};

export const BoardColumn: FC<BoardColumnProps> = ({
  dragItem,
  index,
}) => {
  const {
    dragRef,
    isDragging,
  } = useBoardColumn();

  const dispatch = useAppDispatch();

  const handleDrop = useCallback((item: unknown) => {
    if (!isColumn(item)) {
      return;
    }

    dispatch(updateColumn({
      meta: {
        id: item.id,
        index,
      },
    }));
  }, [
    dispatch,
    index,
  ]);

  return (

    <DroppableListItemStyled
      dragType={dragTypes.COLUMN}
      handleDrop={handleDrop}
    >
      <HideableBoardColumnStyled $isHidden={isDragging}>
        <ColumnContent dragRef={dragRef} />
      </HideableBoardColumnStyled>
      {isColumn(dragItem) && (
        <DragLayerStyled>
          <p>{dragItem.title}</p>
        </DragLayerStyled>
      )}
    </DroppableListItemStyled>
  );
};
