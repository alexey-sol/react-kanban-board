import { BoardColumn } from '../BoardColumn';
import { BoardStyled } from './style';
import { useAppSelector } from '@/app/store/hooks';
import { AddColumnForm } from '@/components/Board/AddColumnForm';
import { ColumnContextProvider } from '@/contexts/ColumnContext';
import { selectAllColumns } from '@/slice/selectors';
import { type FC } from 'react';

export const Board: FC = () => {
  const columns = useAppSelector(selectAllColumns);

  return (
    <BoardStyled>
      {columns.map((column) => (
        <ColumnContextProvider column={column} key={column.id}>
          <BoardColumn />
        </ColumnContextProvider>
      ))}
      <AddColumnForm />
    </BoardStyled>
  );
};
