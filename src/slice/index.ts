import { generateId } from '../utils/helpers/generators';
import { initialState } from './const';
import {
  type AddCardPayload,
  type AddColumnPayload,
  type HasColumnId,
  type UpdateCardPayload,
  type UpdateColumnPayload,
} from './types';
import {
  filterMapCardIdToColumnIdByColumnId,
  initializeCardsIfNeeded,
} from './utils';
import { logError } from '@/utils/log';
import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

export const boardSlice = createSlice({
  initialState,
  name: 'board',
  reducers: {
    addCard: (state, action: PayloadAction<AddCardPayload>) => {
      const {
        columnId,
        message,
      } = action.payload;

      const id = generateId();

      initializeCardsIfNeeded(state, columnId);

      state.mapColumnIdToCards[columnId].push({
        columnId,
        id,
        message,
      });

      state.mapCardIdToColumnId[id] = columnId;
    },
    addColumn: (state, { payload }: PayloadAction<AddColumnPayload>) => {
      const id = generateId();

      state.columns.push({
        id,
        title: payload.title,
      });

      initializeCardsIfNeeded(state, id);
    },
    deleteColumn: (state, { payload }: PayloadAction<HasColumnId>) => {
      const { columnId } = payload;
      state.mapCardIdToColumnId = filterMapCardIdToColumnIdByColumnId(state.mapCardIdToColumnId, columnId);
      delete state.mapColumnIdToCards[columnId]; // eslint-disable-line @typescript-eslint/no-dynamic-delete
      state.columns = state.columns.filter(({ id }) => id !== columnId);
    },
    updateCard: (state, action: PayloadAction<UpdateCardPayload>) => {
      const {
        data,
        meta,
      } = action.payload;

      const currentColumnId = state.mapCardIdToColumnId[meta.id];
      const currentIndex = state.mapColumnIdToCards[currentColumnId].findIndex(({ id }) => id === meta.id);

      if (currentIndex === -1) {
        logError(`No card with id = ${meta.id} found in board slice when updateCard`);
        return;
      }

      const currentData = state.mapColumnIdToCards[currentColumnId][currentIndex] ?? {};

      const updatedCard = {
        ...currentData,
        ...data,
      };

      initializeCardsIfNeeded(state, meta.columnId);

      const resultIndex = meta.index ?? currentIndex;
      state.mapColumnIdToCards[currentColumnId] = state.mapColumnIdToCards[currentColumnId].filter(({ id }) => id !== meta.id);
      state.mapColumnIdToCards[meta.columnId].splice(resultIndex, 0, updatedCard);
      state.mapCardIdToColumnId[meta.id] = meta.columnId;
    },
    updateColumn: (state, action: PayloadAction<UpdateColumnPayload>) => {
      const {
        data,
        meta,
      } = action.payload;

      const currentIndex = state.columns.findIndex(({ id }) => id === meta.id);

      if (currentIndex === -1) {
        logError(`No column with id = ${meta.id} found in board slice when updateColumn`);
        return;
      }

      const currentData = state.columns[currentIndex];

      const updatedColumn = {
        ...currentData,
        ...data,
      };

      const resultIndex = meta.index ?? currentIndex;
      state.columns = state.columns.filter(({ id }) => id !== meta.id);
      state.columns.splice(resultIndex, 0, updatedColumn);
    },
  },
});

export const {
  addCard,
  addColumn,
  deleteColumn,
  updateCard,
  updateColumn,
} = boardSlice.actions;

export const boardReducer = boardSlice.reducer;
