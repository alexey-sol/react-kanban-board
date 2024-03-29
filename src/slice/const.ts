/* eslint-disable canonical/sort-keys */
import { type BoardState } from './types';

const mapColumnIdToTitle: BoardState['mapColumnIdToTitle'] = {
  toDo: 'To Do',
  inProgress: 'In Progress',
  done: 'Done',
};

export const initialState: BoardState = {
  mapCardIdToColumnId: {},
  mapColumnIdToCards: {},
  mapColumnIdToTitle,
};
