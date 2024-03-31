import { BoardColumn } from '../BoardColumn';
import { DroppableListItem } from '../DroppableListItem';
import { BoardStyled } from './style';
import {
  useAppDispatch,
  useAppSelector,
} from '@/app/store/hooks';
import { AddColumnForm } from '@/components/Board/AddColumnForm';
import { CardPreviewDragLayer } from '@/components/CardPreviewDragLayer';
import { dragTypes } from '@/const';
import { ColumnContextProvider } from '@/contexts/ColumnContext';
import { updateColumn } from '@/slice';
import { selectAllColumns } from '@/slice/selectors';
import { isColumn } from '@/utils/helpers/guards';
import {
  type FC,
  useCallback,
} from 'react';

export const Board: FC = () => {
  const columns = useAppSelector(selectAllColumns);

  const dispatch = useAppDispatch();

  const handleDrop = useCallback((item: unknown, index?: number) => {
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
  ]);

  return (
    <BoardStyled>
      {columns.map((column, index) => (
        <ColumnContextProvider column={column} key={column.id}>
          <DroppableListItem
            dragType={dragTypes.COLUMN}
            handleDrop={(item) => handleDrop(item, index)}
          >
            <BoardColumn />
            <CardPreviewDragLayer />
          </DroppableListItem>
        </ColumnContextProvider>
      ))}
      <AddColumnForm />
    </BoardStyled>
  );
};
