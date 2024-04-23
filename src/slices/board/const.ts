import { type BoardState } from './types';

const columns: BoardState['columns'] = [
  {
    id: 'toDo',
    title: 'To Do',
  },
  {
    id: 'inProgress',
    title: 'In Progress',
  },
  {
    id: 'done',
    title: 'Done',
  },
];

export const initialState: BoardState = {
  columns,
  mapCardIdToColumnId: {},
  mapColumnIdToCards: {},
};
