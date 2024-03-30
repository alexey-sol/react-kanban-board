import { type BoardState } from './types';

export const initializeCardsIfNeeded = (state: BoardState, columnId: string) => {
  if (!state.mapColumnIdToCards[columnId]) {
    state.mapColumnIdToCards[columnId] = [];
  }
};

export const filterMapCardIdToColumnIdByColumnId = (
  mapCardIdToColumnId: BoardState['mapCardIdToColumnId'],
  columnId: string,
) => {
  const entries = Object.entries<string>(mapCardIdToColumnId);
  const filteredEntries = entries.filter((entry) => columnId !== entry[1]);

  return Object.fromEntries(filteredEntries);
};
