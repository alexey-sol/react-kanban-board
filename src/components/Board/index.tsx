import { useDragLayerData } from '../DragLayer/utils';
import {
  AddColumnForm,
  ColumnWrapper,
} from './components';
import { BoardStyled } from './style';
import { useAppSelector } from '@/app/store/hooks';
import { selectAllColumns } from '@/slice/selectors';
import { type FC } from 'react';

export const Board: FC = () => {
  const columns = useAppSelector(selectAllColumns);

  const { item: dragItem } = useDragLayerData();

  return (
    <BoardStyled>
      {columns.map((column, index) => (
        <ColumnWrapper
          column={column}
          dragItem={dragItem}
          index={index}
          key={column.id}
        />
      ))}
      <AddColumnForm />
    </BoardStyled>
  );
};
