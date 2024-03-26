import { BoardColumn } from '../BoardColumn';
import { BoardStyled } from './style';
import { ColumnContextProvider } from '@/contexts/ColumnContext';
import { type TaskStatus } from '@/models';
import { type FC } from 'react';

const COLUMNS: TaskStatus[] = [
  'TO_DO',
  'IN_PROGRESS',
  'DONE',
];

export const Board: FC = () => (
  <BoardStyled>
    {COLUMNS.map((status, index) => (
      // eslint-disable-next-line react/no-array-index-key -- It's a static list, so index key is fine here
      <ColumnContextProvider key={index} taskStatus={status}>
        <BoardColumn />
      </ColumnContextProvider>
    ))}
  </BoardStyled>
);
