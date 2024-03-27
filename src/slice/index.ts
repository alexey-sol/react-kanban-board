import { generateId } from '../utils/helpers/generators';
import {
  type AddCardProps,
  type UpdateCardProps,
} from './types';
import { type Card } from '@/models';
import {
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit';

export type BoardState = {
  cards: Record<string, Card[]>,
  columns: string[],
  mapTaskIdToStatus: Record<string, string>,
};

const initialState: BoardState = {
  cards: {},
  columns: [
    'To Do',
    'Done',
  ],
  mapTaskIdToStatus: {},
};

const initializeCardsIfNeeded = (state: BoardState, taskStatus: string) => {
  if (!state.cards[taskStatus]) {
    state.cards[taskStatus] = [];
  }
};

export const boardSlice = createSlice({
  initialState,
  name: 'board',
  reducers: {
    addCard: (state, action: PayloadAction<AddCardProps>) => {
      const {
        data,
        meta,
      } = action.payload;
      const id = generateId();

      initializeCardsIfNeeded(state, meta.status);

      state.cards[meta.status].push({
        id,
        task: data.task,
      });

      state.mapTaskIdToStatus[id] = meta.status;
    },
    addColumn: (state, action: PayloadAction<string>) => {
      const taskStatus = action.payload;
      state.columns.push(taskStatus);
      initializeCardsIfNeeded(state, taskStatus);
    },
    updateCard: (state, action: PayloadAction<UpdateCardProps>) => {
      const {
        data,
        meta,
      } = action.payload;

      const currentStatus = state.mapTaskIdToStatus[meta.id];
      const currentIndex = state.cards[currentStatus].findIndex(({ id }) => id === meta.id);
      const currentData = state.cards[currentStatus][currentIndex] ?? {};
      const resultIndex = meta.index ?? currentIndex;

      const updatedCard = {
        ...currentData,
        ...data,
      };

      initializeCardsIfNeeded(state, meta.status);
      state.cards[currentStatus] = state.cards[currentStatus].filter(({ id }) => id !== meta.id);
      state.cards[meta.status].splice(resultIndex, 0, updatedCard);
      state.mapTaskIdToStatus[meta.id] = meta.status;
    },
  },
});

export const {
  addCard,
  addColumn,
  updateCard,
} = boardSlice.actions;

export const boardReducer = boardSlice.reducer;
