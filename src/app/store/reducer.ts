import {
  boardReducer,
  boardSlice,
} from '@/slices/board';
import { feedbackReducer } from '@/slices/feedback';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'board',
  storage,
  whitelist: [
    boardSlice.name,
  ],
};

export const rootReducer = combineReducers({
  board: boardReducer,
  feedback: feedbackReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
