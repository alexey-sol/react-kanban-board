import { useDragLayer } from '../DragLayer/utils';
import { BoardStyled } from './style';
import { useAppSelector } from '@/app/store/hooks';
import {
  BoardColumn,
  BoardColumnAdd,
} from '@/components/BoardColumn';
import { ColumnContextProvider } from '@/contexts/ColumnContext';
import { selectAllColumns } from '@/slices/board/selectors';
import { type FC } from 'react';

export const Board: FC = () => {
  const columns = useAppSelector(selectAllColumns);

  const { item: dragItem } = useDragLayer();

  return (
    <BoardStyled>
      {columns.map((column, index) => (
        <ColumnContextProvider column={column} key={column.id}>
          <BoardColumn
            dragItem={dragItem}
            index={index}
            key={column.id}
          />
        </ColumnContextProvider>
      ))}
      <BoardColumnAdd />
    </BoardStyled>
  );
};
