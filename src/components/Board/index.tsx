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
      {columns.map((status, index) => (
        // eslint-disable-next-line react/no-array-index-key -- It's a static list, so index key is fine here
        <ColumnContextProvider key={index} taskStatus={status}>
          <BoardColumn />
        </ColumnContextProvider>
      ))}
      <AddColumnForm />
    </BoardStyled>
  );
};
