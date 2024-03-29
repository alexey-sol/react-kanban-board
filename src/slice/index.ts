import { generateId } from '../utils/helpers/generators';
import { initialState } from './const';
import {
  type AddCardPayload,
  type AddColumnPayload,
  type BoardState,
  type UpdateCardPayload,
  type UpdateColumnPayload,
} from './types';
import { logError } from '@/utils/log';
import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

const initializeCardsIfNeeded = (state: BoardState, columnId: string) => {
  if (!state.mapColumnIdToCards[columnId]) {
    state.mapColumnIdToCards[columnId] = [];
  }
};

export const boardSlice = createSlice({
  initialState,
  name: 'board',
  reducers: {
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      const {
        data,
        meta,
      } = action.payload;
      const id = generateId();

      initializeCardsIfNeeded(state, meta.columnId);

      state.mapColumnIdToCards[meta.columnId].push({
        columnId: meta.columnId,
        id,
        message: data.message,
      });

      state.mapCardIdToColumnId[id] = meta.columnId;
    },
    addColumn: (state, { payload }: PayloadAction<AddColumnPayload>) => {
      const columnId = generateId();
      state.mapColumnIdToTitle[columnId] = payload.title;
      initializeCardsIfNeeded(state, columnId);
    },
    updateCard: (state, action: PayloadAction<UpdateCardPayload>) => {
      const {
        data,
        meta,
      } = action.payload;

      const columnId = state.mapCardIdToColumnId[meta.id];
      const currentIndex = state.mapColumnIdToCards[columnId].findIndex(({ id }) => id === meta.id);
      const currentData = state.mapColumnIdToCards[columnId][currentIndex] ?? {};
      const resultIndex = meta.index ?? currentIndex;

      const updatedCard = {
        ...currentData,
        ...data,
      };

      initializeCardsIfNeeded(state, meta.columnId);
      state.mapColumnIdToCards[columnId] = state.mapColumnIdToCards[columnId].filter(({ id }) => id !== meta.id);
      state.mapColumnIdToCards[meta.columnId].splice(resultIndex, 0, updatedCard);
      state.mapCardIdToColumnId[meta.id] = meta.columnId;
    },
    updateColumn: (state, action: PayloadAction<UpdateColumnPayload>) => {
      const {
        id,
        title,
      } = action.payload;

      const hasColumn = id in state.mapColumnIdToTitle;

      if (!hasColumn) {
        logError(`No column with id = ${id} found in board slice when updateColumn`);
        return;
      }

      state.mapColumnIdToTitle[id] = title;
    },
  },
});

export const {
  addCard,
  addColumn,
  updateCard,
  updateColumn,
} = boardSlice.actions;

export const boardReducer = boardSlice.reducer;
