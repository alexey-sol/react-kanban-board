import { BoardColumn } from '../BoardColumn';
import { BoardStyled } from './style';
import { ColumnContextProvider } from '@/contexts/ColumnContext';
import { type TaskStatus } from '@/models';
import { type FC } from 'react';

const COLUMN_TITLES: TaskStatus[] = [
  'Planned',
  'In Progress',
  'Done',
];

export const Board: FC = () => (
  <BoardStyled>
    {COLUMN_TITLES.map((title, index) => (
      // eslint-disable-next-line react/no-array-index-key -- It's a static list, so index key is fine here
      <ColumnContextProvider key={index} taskStatus={title}>
        <BoardColumn />
      </ColumnContextProvider>
    ))}
  </BoardStyled>
);
